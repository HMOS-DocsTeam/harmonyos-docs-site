"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["503680"], {
249524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_payment_api_payment_rest_payment_rest_overview_payment_rest_overview_md_462_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-payment-api-payment-rest-payment-rest-overview-payment-rest-overview-md-462.json
var site_docs_ref_payment_api_payment_rest_payment_rest_overview_payment_rest_overview_md_462_namespaceObject = JSON.parse('{"id":"payment-api/payment-rest/payment-rest-overview/payment-rest-overview","title":"公共说明","description":"HTTPS安全要求","source":"@site/docs-ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview.md","sourceDirName":"payment-api/payment-rest/payment-rest-overview","slug":"/payment-api/payment-rest/payment-rest-overview/payment-rest-overview","permalink":"/harmonyos-docs-site/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"公共说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-rest-overview","kit":"应用服务","last_updated":"2026-04-22","slug":"payment-rest-overview"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/payment-api/payment-arkts/payment-error-code/payment-error-code"},"next":{"title":"预下单","permalink":"/harmonyos-docs-site/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-prepay/payment-prepay"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview.md


const frontMatter = {
	title: '公共说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-rest-overview',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'payment-rest-overview'
};
const contentTitle = '公共说明';

const assets = {

};



const toc = [{
  "value": "HTTPS安全要求",
  "id": "https安全要求",
  "level": 2
}, {
  "value": "HTTP方法说明",
  "id": "http方法说明",
  "level": 2
}, {
  "value": "数据格式",
  "id": "数据格式",
  "level": 2
}, {
  "value": "字符编码",
  "id": "字符编码",
  "level": 2
}, {
  "value": "认证授权",
  "id": "认证授权",
  "level": 2
}, {
  "value": "签名规则",
  "id": "签名规则",
  "level": 2
}, {
  "value": "常用语言SHA256WithRSA/PSS加签示例代码参考",
  "id": "常用语言sha256withrsapss加签示例代码参考",
  "level": 3
}, {
  "value": "验签规则",
  "id": "验签规则",
  "level": 2
}, {
  "value": "常用语言SM2验签示例代码参考",
  "id": "常用语言sm2验签示例代码参考",
  "level": 3
}, {
  "value": "通知回调接口说明",
  "id": "通知回调接口说明",
  "level": 2
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
        id: "公共说明",
        children: "公共说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "https安全要求",
      children: "HTTPS安全要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "所有的API请求必须使用HTTPS。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的TLS协议版本：1.2 / 1.3。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的加密套件列表："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TLS_CHACHA20_POLY1305_SHA256\nTLS_AES_128_GCM_SHA256\nTLS_AES_256_GCM_SHA384\nTLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256\nTLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "http方法说明",
      children: "HTTP方法说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前Payment Kit对外接口涉及GET及POST两种HTTP METHOD。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "GET"
          })
        }), "：对应于查询场景。适用于从服务器查询资源数据，如查询订单信息、查询签约信息等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "POST"
          })
        }), "：对应于新建/更新资源场景，如预下单、退款请求等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据格式",
      children: "数据格式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求和响应报文统一使用JSON格式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字符编码",
      children: "字符编码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payment Kit所有请求默认支持UTF-8编码，如采用其他编码格式的报文可能导致验签失败、字段解析失败等问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP METHOD方式为GET的接口请求，请求URL如涉及参数拼接，拼接后完整的请求URL不建议带特殊字符。如有需要，建议对URL中的特殊字符进行编码处理。URL特殊字符参考但不限于：+, 空格, ?, %, #, &, ="
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "认证授权",
      children: "认证授权"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "认证(Authentication)"
          })
        }), "：认证操作确认调用者身份，防抵赖和数据篡改。所有对商户开放接口均需要商户在请求头中传递", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-model/payment-model#paymercauth",
          children: "PayMercAuth"
        }), "字段，在开放网关认证通过后方可进行后续流程。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "授权(Authorization)"
          })
        }), "：授权确保给定接口仅特定调用者才有权限调用。部分接口仅特定商户申请开通后方可使用。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "签名规则",
      children: "签名规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "签名场景："
        })
      }), " 商户云侧请求的请求头中参数签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "签名算法："
        })
      }), " SHA256WithRSA/PSS 或者 SM2。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "筛选：排除请求JSON字符串中sign字段，只保留sign以外的其他字段。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "排序拼接：按key值的ASCII码顺序排序，并使用&拼接，列表场景使用符号“=”连接。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/HarmonyOS_Samples/paymentkit-sample-code-serverdemo-java",
            children: "示例代码"
          }), "引入华为支付提供", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-preparations/payment-server-connect#%E9%9B%86%E6%88%90maven%E4%BE%9D%E8%B5%96",
            children: "Maven依赖（pay-java）"
          }), "中SignStringUtil.java类的signString方法，排序拼接结果示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"allocationType=DELAY_ORDER_ALLOCATION&callbackUrl=https://www.xxxxxx.com/hw/pay/callback&currency=CNY&mercNo=xxxxxx&mercOrderNo=xxxxxx&totalAmount=2&tradeSummary=杂志报刊\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "签名：调用给定算法对排序后的串完成签名。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SHA256WithRSA/PSS："
            })
          }), " 具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/HarmonyOS_Samples/paymentkit-sample-code-serverdemo-java",
            children: "示例代码"
          }), "引入华为支付提供", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-preparations/payment-server-connect#%E9%9B%86%E6%88%90maven%E4%BE%9D%E8%B5%96",
            children: "Maven依赖（pay-java）"
          }), "中RSAUtils.java类的signByRSAWithPSS方法。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SM2："
            })
          }), " 具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-preparations/payment-server-connect#%E9%9B%86%E6%88%90maven%E4%BE%9D%E8%B5%96",
            children: "Maven依赖（pay-java）"
          }), "中Sm2Utils.java类中的sign方法。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "加签内容参考："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "POST请求：POST https://petalpay-developer.cloud.huawei.com.cn/api/v2/aggr/preorder/create/app\n{\n    \"appId\": \"5765880207854262xxx\",\n    \"callbackUrl\": \"https://www.xxx.com/hw_notify\",\n    \"currency\": \"CNY\",\n    \"mercNo\": \"101723200xxx\",\n    \"mercOrderNo\": \"2405171027547xxx\",\n    \"payload\": \"shop|h8ahnJA8xxRXVw\",\n    \"totalAmount\": 5,\n    \"tradeSummary\": \"test\",\n    \"subOrders\": [\n      {\n        \"mercNo\": \"101723200xxx\",\n        \"mercOrderNo\": \"abcxxx1\"\n      },\n      {\n        \"mercNo\": \"101723201xxx\",\n        \"mercOrderNo\": \"abcxxx2\"\n      }\n    ]\n}\n加签内容：appId=5765880207854262xxx&callbackUrl=https://www.xxx.com/hw_notify&currency=CNY&mercNo=101723200xxx&mercOrderNo=2405171027547xxx&payload=shop|h8ahnJA8xxRXVw&subOrders=mercNo=101723200xxx&mercOrderNo=abcxxx1,mercNo=101723201xxx&mercOrderNo=abcxxx2&totalAmount=5&tradeSummary=test\n\nGET请求：GET https://petalpay-developer.cloud.huawei.com.cn/api/v2/aggr/transactions/merc-orders/20240507000000041809599950090xxx?mercNo=101540000089&sdkVersion=1.0.0\n加签内容：/api/v2/aggr/transactions/merc-orders/20240507000000041809599950090xxx?mercNo=101540000089&sdkVersion=1.0.0\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(53786)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "字段值设置为null时，字段可不参与签名，设置为空字符时，则必须参与签名。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常用语言sha256withrsapss加签示例代码参考",
      children: "常用语言SHA256WithRSA/PSS加签示例代码参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "go语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 排序拼接示例\nimport (\n    \"encoding/base64\"\n    \"encoding/hex\"\n    \"encoding/json\"\n    \"fmt\"\n    \"sort\"\n    \"strings\"\n)\n\n// GenerateSignData 生成待签名字符串\n// 步骤一：筛选，排除sign字段\n// 步骤二：排序拼接，按key的ascii码顺序排序，使用&连接\nfunc (s *SignatureUtils) GenerateSignData(params map[string]interface{}) string {\n    return s.buildSignData(params)\n}\n// buildSignData 递归构建签名字符串\nfunc (s *SignatureUtils) buildSignData(params interface{}) string {\n    switch v := params.(type) {\n    case map[string]interface{}:\n        return s.buildMapSignData(v)\n    case []interface{}:\n        return s.buildArraySignData(v)\n    default:\n        return fmt.Sprintf(\"%v\", v)\n    }\n}\n// buildMapSignData 处理Map类型数据\nfunc (s *SignatureUtils) buildMapSignData(params map[string]interface{}) string {\n    // 排序key\n    var keys []string\n    for k := range params {\n        // 排除sign字段\n        if k == \"sign\" {\n            continue\n        }\n        keys = append(keys, k)\n    }\n    sort.Strings(keys)\n    var parts []string\n    for _, key := range keys {\n        value := params[key]\n        // null值不参与签名\n        if value == nil {\n            continue\n        }\n        // 空字符串参与签名\n        strValue := s.buildSignData(value)\n        parts = append(parts, fmt.Sprintf(\"%s=%s\", key, strValue))\n    }\n    return strings.Join(parts, \"&\")\n}\n// buildArraySignData 处理数组类型数据\nfunc (s *SignatureUtils) buildArraySignData(arr []interface{}) string {\n    var parts []string\n    for _, item := range arr {\n        if item == nil {\n            continue\n        }\n        parts = append(parts, s.buildSignData(item))\n    }\n    return strings.Join(parts, \",\")\n}\n\n// 加签示例\npackage main\nimport (\n  \"crypto\"\n  \"crypto/rand\"\n  \"crypto/rsa\"\n  \"crypto/sha256\"\n  \"crypto/x509\"\n  \"encoding/base64\"\n  \"fmt\"\n  \"testing\"\n)\nfunc signSha256WithRsaPSS(message, privateKeyStr string) (string, error) {\n  privateKey, err := getPrivateKey(privateKeyStr)\n  if err != nil {\n    return \"\", err\n  }\n  hasher := sha256.New()\n  hasher.Write([]byte(message))\n  hashedMessage := hasher.Sum(nil)\n  opts := rsa.PSSOptions{\n    SaltLength: rsa.PSSSaltLengthEqualsHash,\n    Hash:       crypto.SHA256,\n  }\n  signature, err := rsa.SignPSS(rand.Reader, privateKey, crypto.SHA256, hashedMessage, &opts)\n  if err != nil {\n    return \"\", err\n  }\n  return base64.StdEncoding.EncodeToString(signature), nil\n}\n\nfunc getPrivateKey(privateKeyStr string) (*rsa.PrivateKey, error) {\n  decoded, err := base64.StdEncoding.DecodeString(privateKeyStr)\n  if err != nil {\n    return nil, err\n  }\n  privateKey, err := x509.ParsePKCS8PrivateKey(decoded)\n  if err != nil {\n    return nil, err\n  }\n  rsaPrivateKey, ok := privateKey.(*rsa.PrivateKey)\n  if !ok {\n  return nil, err\n  }\n  return rsaPrivateKey, nil\n}\n\nfunc TestRsaSign(t *testing.T) {\n  signature, err := signSha256WithRsaPSS(\"加签排序拼接内容\",\"私钥\")\n  fmt.Println(signature, err)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JavaScript语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "javascript可通过jsrsasign模块实现，如已安装node环境，可执行如下命令安装jsrsasign模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install jsrsasign\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 排序拼接示例\n/**\n * 递归构建签名字符串\n * @param {*} data 数据\n * @returns {string} 签名字符串\n */\nbuildSignData(data) {\n    if (data === null || data === undefined) {\n        return '';\n    }\n    if (typeof data === 'object' && !Array.isArray(data)) {\n        return this.buildMapSignData(data);\n    }\n    if (Array.isArray(data)) {\n        return this.buildArraySignData(data);\n    }\n    return String(data);\n}\n/**\n * 处理Map类型数据\n * @param {Object} params 参数对象\n * @returns {string} 签名字符串\n */\nbuildMapSignData(params) {\n    // 排序key\n    const keys = Object.keys(params)\n        .filter(key => key !== 'sign') // 排除sign字段\n        .sort();\n    const parts = [];\n    for (const key of keys) {\n        const value = params[key];\n        // null值不参与签名\n        if (value === null || value === undefined) {\n            continue;\n        }\n        // 空字符串参与签名\n        const strValue = this.buildSignData(value);\n        parts.push(`${key}=${strValue}`);\n    }\n    return parts.join('&');\n}\n/**\n * 处理数组类型数据\n * @param {Array} arr 数组\n * @returns {string} 签名字符串\n */\nbuildArraySignData(arr) {\n    const parts = [];\n    for (const item of arr) {\n        if (item === null || item === undefined) {\n            continue;\n        }\n        parts.push(this.buildSignData(item));\n    }\n    return parts.join(',');\n}\n\n// 加签示例\nconst jsrsasign = require('jsrsasign');\nfunction signSha256WithRsaPSS(plainData, privateStr) {\n  let rsa = new jsrsasign.RSAKey();\n  // PEM 格式的私钥\n  const priKey = `-----BEGIN PRIVATE KEY-----\\n${privateStr}\\n-----END PRIVATE KEY-----\\n`;\n  rsa = jsrsasign.KEYUTIL.getKey(priKey);\n  const sig = new jsrsasign.KJUR.crypto.Signature({\n    alg: 'SHA256withRSAandMGF1',\n  });\n  sig.init(rsa);\n  sig.updateString(plainData);\n  return jsrsasign.hextob64(sig.sign());\n}\nlet signature = signSha256WithRsaPSS(\"加签排序拼接内容\",\"私钥\");\nconsole.info(signature)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "python语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "python可通过cryptography模块实现，可先执行如下命令安装cryptography模块："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pip install cryptography\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 排序拼接示例\ndef generate_sign_data(self, params):\n    \"\"\"\n    生成待签名字符串\n    步骤一：筛选，排除sign字段\n    步骤二：排序拼接，按key的ascii码顺序排序，使用&连接\n    Args:\n        params: 参数字典\n    Returns:\n        str: 待签名字符串\n    \"\"\"\n    return self._build_sign_data(params)\ndef _build_sign_data(self, data):\n    \"\"\"\n    递归构建签名字符串\n    Args:\n        data: 数据\n    Returns:\n        str: 签名字符串\n    \"\"\"\n    if data is None:\n        return ''\n    if isinstance(data, dict):\n        return self._build_map_sign_data(data)\n    if isinstance(data, (list, tuple)):\n        return self._build_array_sign_data(data)\n    return str(data)\ndef _build_map_sign_data(self, params):\n    \"\"\"\n    处理字典类型数据\n    Args:\n        params: 参数字典\n    Returns:\n        str: 签名字符串\n    \"\"\"\n    # 排序key，排除sign字段\n    keys = sorted([k for k in params.keys() if k != 'sign'])\n    parts = []\n    for key in keys:\n        value = params[key]\n        # None值不参与签名\n        if value is None:\n            continue\n        # 空字符串参与签名\n        str_value = self._build_sign_data(value)\n        parts.append(f\"{key}={str_value}\")\n    return '&'.join(parts)\ndef _build_array_sign_data(self, arr):\n    \"\"\"\n    处理数组类型数据\n    Args:\n        arr: 数组\n    Returns:\n        str: 签名字符串\n    \"\"\"\n    parts = []\n    for item in arr:\n        if item is None:\n            continue\n        parts.append(self._build_sign_data(item))\n    return ','.join(parts)\n\n// 加签示例\nimport base64\n\nfrom cryptography.hazmat.primitives import hashes\nfrom cryptography.hazmat.primitives.asymmetric import padding\nfrom cryptography.hazmat.backends import default_backend\nfrom cryptography.hazmat.primitives.serialization import load_pem_private_key, load_pem_public_key\n\ndef signSha256WithRsaPSS(private_key_str, message):\n    # PEM 格式的私钥\n    prikey_content = \"-----BEGIN PRIVATE KEY-----\\n\" + private_key_str +\"\\n-----END PRIVATE KEY-----\\n\";\n    private_key = load_pem_private_key(data=prikey_content.encode(\"utf-8\"), password=None, backend=default_backend())\n\n    # 使用 RSA-PSS 算法生成签名\n    signature = private_key.sign(\n        message.encode(\"utf-8\"),\n        padding.PSS(\n            mgf=padding.MGF1(hashes.SHA256()),\n            salt_length=padding.PSS.DIGEST_LENGTH\n        ),\n        hashes.SHA256()\n    )\n    return base64.b64encode(signature).decode('utf-8')\n\nmessage = \"加签排序拼接内容\"\nprivate_key_str = \"私钥\"\nsignature = signSha256WithRsaPSS(private_key_str, message)\nprint(signature)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "php语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "php可通过phpseclib加密库实现，如已安装composer环境，可先通过以下命令导入phpseclib："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "composer require phpseclib/phpseclib\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "phpseclib2加签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 排序拼接示例\nclass SignatureUtils\n{\n    /**\n     * 生成待签名字符串\n     * 步骤一：筛选，排除sign字段\n     * 步骤二：排序拼接，按key的ascii码顺序排序，使用&连接\n     *\n     * @param array $params 参数数组\n     * @return string 待签名字符串\n     */\n    public function generateSignData($params)\n    {\n        return $this->buildSignData($params);\n    }\n    /**\n     * 递归构建签名字符串\n     *\n     * @param mixed $data 数据\n     * @return string 签名字符串\n     */\n    private function buildSignData($data)\n    {\n        if ($data === null) {\n            return '';\n        }\n        if (is_array($data)) {\n            // 判断是否为关联数组（Map）\n            if ($this->isAssocArray($data)) {\n                return $this->buildMapSignData($data);\n            } else {\n                return $this->buildArraySignData($data);\n            }\n        }\n        return (string)$data;\n    }\n    /**\n     * 判断是否为关联数组\n     *\n     * @param array $arr 数组\n     * @return bool\n     */\n    private function isAssocArray($arr)\n    {\n        if (empty($arr)) {\n            return false;\n        }\n        return array_keys($arr) !== range(0, count($arr) - 1);\n    }\n    /**\n     * 处理Map类型数据\n     *\n     * @param array $params 参数数组\n     * @return string 签名字符串\n     */\n    private function buildMapSignData($params)\n    {\n        // 排序key，排除sign字段\n        $keys = array_keys($params);\n        $keys = array_filter($keys, function($key) {\n            return $key !== 'sign';\n        });\n        sort($keys);\n        $parts = [];\n        foreach ($keys as $key) {\n            $value = $params[$key];\n            // null值不参与签名\n            if ($value === null) {\n                continue;\n            }\n            // 空字符串参与签名\n            $strValue = $this->buildSignData($value);\n            $parts[] = $key . '=' . $strValue;\n        }\n        return implode('&', $parts);\n    }\n    /**\n     * 处理数组类型数据\n     *\n     * @param array $arr 数组\n     * @return string 签名字符串\n     */\n    private function buildArraySignData($arr)\n    {\n        $parts = [];\n        foreach ($arr as $item) {\n            if ($item === null) {\n                continue;\n            }\n            $parts[] = $this->buildSignData($item);\n        }\n        return implode(',', $parts);\n    }\n    /**\n     * Base64转Hex\n     *\n     * @param string $base64String Base64字符串\n     * @return string Hex字符串\n     */\n    private function base64ToHex($base64String)\n    {\n        $bytes = base64_decode($base64String);\n        return bin2hex($bytes);\n    }\n    /**\n     * 解析JSON字符串为数组\n     *\n     * @param string $jsonStr JSON字符串\n     * @return array 数组\n     */\n    public function parseJSON($jsonStr)\n    {\n        return json_decode($jsonStr, true);\n    }\n    /**\n     * 从JSON字符串生成待签名字符串\n     *\n     * @param string $jsonStr JSON字符串\n     * @return string 待签名字符串\n     */\n    public function generateSignDataFromJSON($jsonStr)\n    {\n        $params = $this->parseJSON($jsonStr);\n        return $this->generateSignData($params);\n    }\n    public function testExcludeSignField()\n    {\n        $params = [\n            'appId' => '5765880207854262xxx',\n            'callbackUrl' => 'https://www.xxx.com/hw_notify',\n            'sign' => 'xxxxx', // sign字段应被排除\n            'currency' => 'CNY'\n        ];\n        $signData = $this-> generateSignData($params);\n        echo \"[testExcludeSignField] Sign data without sign field: \" . $signData . \"\\n\";\n    }\n}\n\n// 加签示例\n<?php\nrequire_once 'vendor/autoload.php';\nuse phpseclib\\Crypt\\RSA;\n\nfunction signSha256WithRsaPSS($content, $privateKeyStr) {\n    try {\n        $privateKey = \"-----BEGIN PRIVATE KEY-----\\n\" . $privateKeyStr .\"\\n-----END PRIVATE KEY-----\";\n        $signer = new \\phpseclib\\Crypt\\RSA();\n        $signer->loadKey($privateKey, $password = false);\n        $signer->setHash('sha256');\n        $signer->setSignatureMode(RSA::SIGNATURE_PSS);\n        $signer->setMGFHash('sha256');\n        $signature = $signer->sign($content);\n\n        $sign = base64_encode($signature);\n        return $sign;\n    } catch (Exception $e) {\n        echo $e->getMessage();\n    }\n    return null;\n}\n$data = \"加签排序拼接内容\";\n$privateKeyStr = \"私钥\";\necho signSha256WithRsaPSS($data, $privateKeyStr)\n?>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "phpseclib3加签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<?php\nrequire_once 'vendor/autoload.php';\n\nuse phpseclib3\\Crypt\\PublicKeyLoader;\nuse phpseclib3\\Crypt\\RSA;\n\nfunction signSha256WithRsaPSS($data,$rsa_key){\n    $key = \"-----BEGIN PRIVATE KEY-----\\n\" . $rsa_key . \"-----END PRIVATE KEY-----\";\n    $private = PublicKeyLoader::load($key, $password = false);\n    $private = $private->withPadding(RSA::SIGNATURE_PSS);\n    return base64_encode($private->sign($data));\n}\n\n$data = \"加签排序拼接内容\";\n$privateKeyStr = \"私钥\";\necho signSha256WithRsaPSS($data, $privateKeyStr);\n?>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "C#语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C#可通过BouncyCastle库来实现，如已安装 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://dotnet.microsoft.com/download",
        children: ".NET SDK"
      }), "，可先执行如下命令添加BouncyCastle："]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "dotnet add package BouncyCastle\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "加签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 排序拼接示例\nusing System;\nusing System.Collections.Generic;\nusing System.Security.Cryptography;\nusing System.Text;\nusing System.Text.Json;\nusing System.Linq;\nnamespace PaySignature\n{\n    /// <summary>\n    /// 签名工具类\n    /// </summary>\n    public class SignatureUtils\n    {\n        /// <summary>\n        /// 生成待签名字符串\n        /// 步骤一：筛选，排除sign字段\n        /// 步骤二：排序拼接，按key的ascii码顺序排序，使用&连接\n        /// </summary>\n        /// <param name=\"params\">参数字典</param>\n        /// <returns>待签名字符串</returns>\n        public string GenerateSignData(Dictionary<string, object> parameters)\n        {\n            return BuildSignData(parameters);\n        }\n        /// <summary>\n        /// 递归构建签名字符串\n        /// </summary>\n        /// <param name=\"data\">数据</param>\n        /// <returns>签名字符串</returns>\n        private string BuildSignData(object data)\n        {\n            if (data == null)\n            {\n                return string.Empty;\n            }\n            if (data is Dictionary<string, object> dict)\n            {\n                return BuildMapSignData(dict);\n            }\n            if (data is List<object> list)\n            {\n                return BuildArraySignData(list);\n            }\n            return data.ToString();\n        }\n        /// <summary>\n        /// 处理字典类型数据\n        /// </summary>\n        /// <param name=\"parameters\">参数字典</param>\n        /// <returns>签名字符串</returns>\n        private string BuildMapSignData(Dictionary<string, object> parameters)\n        {\n            // 排序key，排除sign字段\n            var keys = parameters.Keys\n                .Where(k => k != \"sign\")\n                .OrderBy(k => k, StringComparer.Ordinal)\n                .ToList();\n            var parts = new List<string>();\n            foreach (var key in keys)\n            {\n                var value = parameters[key];\n                // null值不参与签名\n                if (value == null)\n                {\n                    continue;\n                }\n                // 空字符串参与签名\n                var strValue = BuildSignData(value);\n                parts.Add($\"{key}={strValue}\");\n            }\n            return string.Join(\"&\", parts);\n        }\n        /// <summary>\n        /// 处理数组类型数据\n        /// </summary>\n        /// <param name=\"arr\">数组</param>\n        /// <returns>签名字符串</returns>\n        private string BuildArraySignData(List<object> arr)\n        {\n            var parts = new List<string>();\n            foreach (var item in arr)\n            {\n                if (item == null)\n                {\n                    continue;\n                }\n                parts.Add(BuildSignData(item));\n            }\n            return string.Join(\",\", parts);\n        }\n        /// <summary>\n        /// Base64转Hex\n        /// </summary>\n        /// <param name=\"base64String\">Base64字符串</param>\n        /// <returns>Hex字符串</returns>\n        private string Base64ToHex(string base64String)\n        {\n            var bytes = Convert.FromBase64String(base64String);\n            return BitConverter.ToString(bytes).Replace(\"-\", \"\").ToLower();\n        }\n        /// <summary>\n        /// 解析JSON字符串为字典\n        /// </summary>\n        /// <param name=\"jsonStr\">JSON字符串</param>\n        /// <returns>字典</returns>\n        public Dictionary<string, object> ParseJSON(string jsonStr)\n        {\n            using var document = JsonDocument.Parse(jsonStr);\n            var result = new Dictionary<string, object>();\n            foreach (var element in document.RootElement.EnumerateObject())\n            {\n                result[element.Name] = ParseJsonElement(element.Value);\n            }\n            return result;\n        }\n        /// <summary>\n        /// 解析JSON元素\n        /// </summary>\n        /// <param name=\"element\">JSON元素</param>\n        /// <returns>对象</returns>\n        private object ParseJsonElement(JsonElement element)\n        {\n            switch (element.ValueKind)\n            {\n                case JsonValueKind.String:\n                    return element.GetString();\n                case JsonValueKind.Number:\n                    if (element.TryGetInt32(out int intValue))\n                        return intValue;\n                    if (element.TryGetInt64(out long longValue))\n                        return longValue;\n                    return element.GetDouble();\n                case JsonValueKind.True:\n                    return true;\n                case JsonValueKind.False:\n                    return false;\n                case JsonValueKind.Null:\n                    return null;\n                case JsonValueKind.Object:\n                    var dict = new Dictionary<string, object>();\n                    foreach (var prop in element.EnumerateObject())\n                    {\n                        dict[prop.Name] = ParseJsonElement(prop.Value);\n                    }\n                    return dict;\n                case JsonValueKind.Array:\n                    var list = new List<object>();\n                    foreach (var item in element.EnumerateArray())\n                    {\n                        list.Add(ParseJsonElement(item));\n                    }\n                    return list;\n                default:\n                    return element.ToString();\n            }\n        }\n        /// <summary>\n        /// 从JSON字符串生成待签名字符串\n        /// </summary>\n        /// <param name=\"jsonStr\">JSON字符串</param>\n        /// <returns>待签名字符串</returns>\n        public string GenerateSignDataFromJSON(string jsonStr)\n        {\n            var parameters = ParseJSON(jsonStr);\n            return GenerateSignData(parameters);\n        }\n    }\n}\n// 测试\nusing Xunit;\nusing PaySignature;\nnamespace PaySignatureTest\n{\n    public class SignatureUtilsTest2\n    {\n        private readonly SignatureUtils _utils;\n        public SignatureUtilsTest2()\n        {\n            _utils = new SignatureUtils();\n        }\n        /// <summary>\n        /// 测试构造签名串\n        /// </summary>\n        [Fact]\n        public void TestComplexNestedStructure()\n        {\n            var goods = new List<object>\n            {\n                new Dictionary<string, object>\n                {\n                    { \"goodsId\", \"G001\" },\n                    { \"goodsName\", \"商品1\" },\n                    { \"quantity\", 2 }\n                },\n                new Dictionary<string, object>\n                {\n                    { \"goodsId\", \"G002\" },\n                    { \"goodsName\", \"商品2\" },\n                    { \"quantity\", 3 }\n                }\n            };\n            var parameters = new Dictionary<string, object>\n            {\n                { \"appId\", \"5765880207854262xxx\" },\n                { \"goods\", goods },\n                { \"totalAmount\", 100 }\n            };\n            var signData = _utils.GenerateSignData(parameters);\n            Assert.Contains(\"appId=5765880207854262xxx\", signData);\n            Assert.Contains(\"goods=\", signData);\n            Console.WriteLine($\"Sign data with complex structure: {signData}\");\n        }\n    }\n}\n\n// 加签示例\nusing System.Text;\nusing Org.BouncyCastle.OpenSsl;\nusing Org.BouncyCastle.Crypto;\nusing Org.BouncyCastle.Crypto.Parameters;\nusing Org.BouncyCastle.Security;\nusing Org.BouncyCastle.Crypto.Signers;\nusing Org.BouncyCastle.Crypto.Engines;\nusing Org.BouncyCastle.Crypto.Digests;\nclass SignProgram\n{\n    public static void Main(string[] args)\n    {\n        string res = RSASign(\"加签排序拼接内容\",\"私钥\");\n        Console.WriteLine(\"result: \" + res);\n    }\n    public static string RSASign(string datastr,string privateStr)\n    {\n        var priKey = \"-----BEGIN PRIVATE KEY-----\\n\"+ privateStr +\"\\n-----END PRIVATE KEY-----\\n\";\n        byte[] data = Encoding.UTF8.GetBytes(datastr);\n        // 创建PSS签名器\n        var signer = new PssSigner(new RsaEngine(), new Sha256Digest());\n        AsymmetricKeyParameter rsaPrivateKey = null;\n        using (var stringReader = new StringReader(priKey))\n        {\n            var pemReader = new PemReader(stringReader);\n            rsaPrivateKey = pemReader.ReadObject() as AsymmetricKeyParameter;\n        }\n        signer.Init(true, new ParametersWithRandom(rsaPrivateKey, new SecureRandom()));\n        signer.BlockUpdate(data, 0, data.Length);\n        byte[] signature = signer.GenerateSignature();\n        return Convert.ToBase64String(signature);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "验签规则",
      children: "验签规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "验签场景："
        })
      }), " 商户需要对来自Payment Kit服务器的信息做验签，验证签名信息身份来自Payment Kit服务器。商户服务器对华为支付服务器返回的回调通知请求参数和退款通知请求参数验签。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "验签算法："
        })
      }), " SM2。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "开发步骤："
        })
      }), " 确认验证签名的公钥证书、确认参与签名字段将待签名字段转换为“key=value”并以符号“&”拼接、使用验签方法验证签名。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["获取华为支付公钥，此处公钥证书为", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://petalpay-merchant.cloud.huawei.com/",
          children: "华为支付商户平台"
        }), "获取的证书，可参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-certificates-config#%E4%B8%8B%E8%BD%BD%E5%8D%8E%E4%B8%BA%E6%94%AF%E4%BB%98%E8%AF%81%E4%B9%A6",
          children: "下载华为支付证书"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "获取参与签名的字段，转换为map并将map的“key-value”排序后以符号“&”拼接。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用SM2算法进行验签，具体参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://gitcode.com/HarmonyOS_Samples/paymentkit-sample-code-serverdemo-java",
          children: "示例代码"
        }), "引入华为支付提供", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-server-connect",
          children: "Maven依赖（pay-java）"
        }), "中VerifyTools.java类的verifySign方法。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(630820)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因业务发展需要，接口字段可能发生变动，建议验签功能实现可扩展——即“先对回调通知的请求体进行验签处理，再转换成业务对象处理”，以确保在字段有变化时也可以正常验签。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "常用语言sm2验签示例代码参考",
      children: "常用语言SM2验签示例代码参考"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "JavaScript语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "javascript可通过sm-crypto模块实现，如已安装node环境，可执行如下命令安装："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "npm install sm-crypto\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const SmCrypto = require('sm-crypto');\nfunction signSM2Verify(plainData, sign, publicStr) {\n  let signHex1 = base64ToHex(sign)\n  console.info(\"plainData: \" + plainData)\n  console.info(\"sign: \" + sign)\n  console.info(\"sign hex: \" + signHex1)\n  return SmCrypto.sm2.doVerifySignature(plainData, signHex1, publicStr, {\n    hash: true,\n    der: true\n  })\n}\nfunction base64ToHex(base64String) {\n  const buffer = Buffer.from(base64String, 'base64');\n  return buffer.toString('hex');\n}\nlet signSM2VerifyRes = signSM2Verify(\n    \"验签排序拼接内容\",\n    \"验签sign\",\n    \"验签公钥\"\n);\nconsole.info(signSM2VerifyRes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "go语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// TestSM2Verify 测试：SM2验签（需要安装go get -u github.com/tjfoc/gmsm）\nfunc ReadSM2PublicKeyFromHex(publicKeyStr string) (*sm2.PublicKey, error) {\n    // 解码十六进制字符串\n    pubKeyBytes, err := hex.DecodeString(publicKeyStr)\n    if err != nil {\n        return nil, fmt.Errorf(\"failed to decode hex: %v\", err)\n    }\n    // 检查是否为非压缩格式 (0x04 开头)\n    if len(pubKeyBytes) != 65 || pubKeyBytes[0] != 0x04 {\n        return nil, fmt.Errorf(\"invalid SM2 public key format (expected 65 bytes, starting with 0x04)\")\n    }\n    // 解析 X 和 Y 坐标（SM2 公钥长度为 65 字节：0x04 + 32字节X + 32字节Y）\n    x := pubKeyBytes[1:33]  // X 坐标（32字节）\n    y := pubKeyBytes[33:65] // Y 坐标（32字节）\n    // 构造 SM2 公钥\n    publicKey := &sm2.PublicKey{\n        Curve: sm2.P256Sm2(), // SM2 曲线\n            X:     new(big.Int).SetBytes(x),\n            Y:     new(big.Int).SetBytes(y),\n    }\n    return publicKey, nil\n}\nfunc (s *SignatureUtils) VerifySM2(content, publicKeyStr, signData string) (bool, error) {\n    // 将Base64签名转换为Hex格式\n    signBytes, err := base64.StdEncoding.DecodeString(signData)\n    if err != nil {\n        return false, fmt.Errorf(\"decode sign data failed: %v\", err)\n    }\n    signHex := hex.EncodeToString(signBytes)\n    // 解析公钥\n    publicKey, err := ReadSM2PublicKeyFromHex(publicKeyStr)\n    if err != nil {\n        return false, fmt.Errorf(\"parse public key failed: %v\", err)\n    }\n    // 将Hex签名转换为字节数组\n    signature, err := hex.DecodeString(signHex)\n    if err != nil {\n        return false, fmt.Errorf(\"decode signature hex failed: %v\", err)\n    }\n    // SM2验签\n    isVerified := publicKey.Verify([]byte(content), signature)\n    if !isVerified {\n        return false, fmt.Errorf(\"SM2 verification requires external library, please install: go get github.com/tjfoc/gmsm\")\n    }\n    return true, nil\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "python语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import binascii\nimport json\nimport base64\nfrom cryptography.hazmat.primitives import hashes\nfrom cryptography.hazmat.primitives.asymmetric import padding, rsa\nfrom cryptography.hazmat.primitives.serialization import load_der_private_key, load_der_public_key\nfrom cryptography.hazmat.backends import default_backend\nfrom pyasn1.codec.ber import decoder\nclass SignatureUtils:\n    RS_LEN = 32\n    def verify_sm2(self, content, public_key_str, sign_data):\n        \"\"\"\n        SM2验签\n        Args:\n            content: 原文\n            public_key_str: 公钥（Hex格式）\n            sign_data: 签名（Base64格式）\n        Returns:\n            bool: 验签结果\n        Raises:\n            Exception: 需要引入SM2库\n        \"\"\"\n        try:\n            from gmssl import sm2, func\n            \n            # 将Base64签名转换为Hex格式\n            sign_hex = self.base64_to_hex(sign_data)\n            print(f'plainData: {content}')\n            print(f'sign: {sign_data}')\n            print(f'sign hex: {sign_hex}')\n            # 创建SM2实例\n            sm2_crypt = sm2.CryptSM2(\n                public_key=self._preprocessing_public_key(public_key_str),\n                private_key=None,\n                asn1=True\n            )\n            # SM2验签\n            is_verified = sm2_crypt.verify_with_sm3(sign_hex, content.encode())\n            \n            return is_verified\n        except ImportError:\n            raise Exception(\"SM2 verification requires gmssl library, please install: pip install gmssl\")\n        except Exception as e:\n            raise Exception(f\"SM2 verification failed: {str(e)}\")\n    def is_asn1_format_key(self, key_hex_str: str, is_public_key: bool = False) -> bool:\n        \"\"\"\n        判断是否为asn1格式的密钥\n        Args:\n            key_hex_str: 十六进制密钥字符串\n            is_public_key: 是否为公钥\n        Returns:\n            boolean\n        \"\"\"\n        ken_len = len(binascii.unhexlify(key_hex_str))\n        if is_public_key:\n            return ken_len != self.RS_LEN * 2 and ken_len != self.RS_LEN * 2 + 1\n        return ken_len != self.RS_LEN and ken_len != self.RS_LEN + 1\n    @classmethod\n    def covert_asn1_der_public_key(self, public_key: str) -> str:\n        \"\"\"\n        将sm2的DER编码的ASN.1格式的公钥，转换成未编码的原始密钥\n        Args:\n            public_key: DER编码的ASN.1格式的公钥字符串。\n        Returns:\n            未编码的原始公钥，直接表示为一个65字节的十六进制字符串\n        \"\"\"\n        asn1_obj, _ = decoder.decode(binascii.unhexlify(public_key))\n        public_key_bytes = asn1_obj[1].asOctets()\n        return public_key_bytes.hex()\n    @classmethod\n    def covert_asn1_der_private_key(self, private_key: str) -> str:\n        \"\"\"\n        将ASN.1格式的私钥，转换成未编码的原始密钥\n        Args:\n            private_key: DER编码的ASN.1格式的私钥字符串\n        Returns:\n            返回BCEC格式的私钥\n        \"\"\"\n        asn1_obj, _ = decoder.decode(binascii.unhexlify(private_key))\n        # 提取私钥的大整数部分，这里是特别适配了华为支付java-sdk的逻辑，如果是其他格式的私钥，可能需要调整这部分\n        private_key_sequence = decoder.decode(asn1_obj[2].asOctets())[0]\n        private_value_bytes = private_key_sequence[1].asOctets()\n        return private_value_bytes[:32].hex()  # 取32字节，为BCEC格式的标准长度\n    @classmethod\n    def _preprocessing_public_key(self, public_key):\n        \"\"\"公钥预处理\"\"\"\n        if self.is_asn1_format_key(self, public_key, is_public_key=True):\n            public_key = self.covert_asn1_der_public_key(public_key)\n        # 手动去除前缀04，避免CryptSM2初始化时检查到04开头会使用lstrip方法，如果原公钥是以0开头，则起始的0会被误去除\n        if public_key.startswith('04'):\n            public_key = public_key[2:]\n        return public_key\n# 验证用例\nsys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'src'))\nfrom signature import SignatureUtils\nclass TestSignatureUtils(unittest.TestCase):\n    \"\"\"签名工具类测试\"\"\"\n    def setUp(self):\n        \"\"\"测试前准备\"\"\"\n        self.utils = SignatureUtils()\n    def test_sm2_verify(self):\n        \"\"\"测试：SM2验签（需要安装gmssl）\"\"\"\n        # SM2测试数据\n        plain_data = ''\n        public_key_str = ''\n        sign_data = '' # Base64格式的SM2签名，需要替换为真实数据\n        try:\n            # SM2验签\n            verified = self.utils.verify_sm2(plain_data, public_key_str, sign_data)\n            print(f'SM2 verification result: {verified}')\n        except Exception as e:\n            if 'gmssl' in str(e):\n                self.skipTest('SM2 test skipped - gmssl not installed')\n            else:\n                raise\nif __name__ == '__main__':\n    unittest.main()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "php语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 使用三方库实现，安装命令：composer require lpilp/guomi\n/**\n* 测试：SM2验签（使用给定的示例数据）\n*/\npublic function testSM2Verify()\n{\n    $plainData = '';\n    $publicKeyStr = '';\n    $signData = \"\";\n    try {\n        // SM2验签\n        $verified = $this->sm2Verify($plainData, $signData, $publicKeyStr);\n        $this->assertTrue($verified, \"SM2 verification should succeed with given sample data\");\n    } catch (Exception $e) {\n        $this->fail('SM2 verify failed: ' . $e->getMessage());\n    }\n}\npublic function sm2Verify(string $data, string $signature, string $publicKey): bool\n{\n    try {\n        if (empty($data)) {\n            throw new Exception('待验签数据不能为空');\n        }\n        if (empty($signature)) {\n            throw new Exception('签名不能为空');\n        }\n        if (empty($publicKey)) {\n            throw new Exception('公钥不能为空');\n        }\n        if (!class_exists('Rtgm\\sm\\RtSm2')) {\n            throw new Exception('Rtgm\\sm\\RtSm2 类不存在，请检查composer依赖');\n        }\n        $signatureHex = bin2hex(base64_decode($signature));\n        $sm2 = new RtSm2();\n        $result = $sm2->verifySign($data, $signatureHex, $publicKey);\n        echo'[sm2Verify] SM2验证结果: '.$result;\n        return $result;\n    } catch (Exception $e) {\n        echo '[sm2Verify Error] SM2验证异常: ' . $e->getMessage();\n        return false;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "c#语言"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验签实现示例代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "using Xunit;\nusing System.Text;\nusing Org.BouncyCastle.Crypto.Parameters;\nusing Org.BouncyCastle.Crypto.Signers;\nusing Org.BouncyCastle.Utilities.Encoders;\nusing Org.BouncyCastle.Asn1.X9;\nnamespace PaySignatureTest\n{\n    public class SignatureUtilsTest3\n    {\n        /// <summary>\n        /// 测试：SM2验签（需要引入BouncyCastle）命令：dotnet add package BouncyCastle\n        /// </summary>\n        [Fact]\n        public void TestSM2Verify()\n        {\n            // SM2测试数据\n            var plainData = \"\";\n            var publicKeyStr = \"\";\n            var signData = \"\"; // Base64格式的SM2签名，需要替换为真实数据\n            // SM2验签\n            var verified = verifySM2(plainData, publicKeyStr, signData);\n            Console.WriteLine($\"SM2 verification result: {verified}\");\n        }\n        public bool verifySM2(string content, string publicKeyStr, string signData)\n        {\n            // 使用BouncyCastle库实现SM2验签\n            // 将Base64签名转换为Hex格式\n            var signBytes = Convert.FromBase64String(signData);\n            var signHex = Hex.ToHexString(signBytes);\n            Console.WriteLine($\"plainData: {content}\");\n            Console.WriteLine($\"sign: {signData}\");\n            Console.WriteLine($\"sign hex: {signHex}\");\n            // 解析公钥\n            var curve = ECNamedCurveTable.GetByName(\"sm2p256v1\");\n            var domain = new ECDomainParameters(curve.Curve, curve.G, curve.N, curve.H);\n            var q = curve.Curve.DecodePoint(Hex.Decode(publicKeyStr));\n            var publicKey = new ECPublicKeyParameters(\"EC\", q, domain);\n            // 解析签名\n            var signer = new SM2Signer();\n            signer.Init(false, publicKey);\n            signer.BlockUpdate(Encoding.UTF8.GetBytes(content), 0, content.Length);\n            var isVerified = signer.VerifySignature(Hex.Decode(signHex));\n            return isVerified;\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通知回调接口说明",
      children: "通知回调接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于回调通知，如果Payment Kit未收到application/json类型响应的数据，或收到应答数据不是{\"resultCode\":\"000000\",\"resultDesc\":\"Success.\"} ，Payment Kit会通过一定的周期定期重新发起通知，但不保证通知最终能成功。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "相同通知可能多次重复发送给商户服务器，商户服务器需要正确实现以应对重复请求，处理建议："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在商户服务器收到通知进行业务处理前先检查对应业务状态，对于未处理过的场景才进行业务处理。已处理的场景则直接返回成功。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "在业务处理时，合理设计同步机制防止并发问题。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果在预期时间内未收到Payment Kit的回调请求，请排查提供的callbackUrl网络是否连通。如排除网络连通性问题，请调用同步查询接口确认订单状态。排查建议："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "确认callbackUrl为商户系统真实地址，保证url中的域名或IP是外网可以正常访问的。不能填写localhost、127.0.0.1、192.168.x.x、10.xx.xx.xx等。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["callbackUrl必须为", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://开头的完整地址"
            }), "。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "对于收到的异步回调请求，请务必进行验签处理并在验签通过后进行后续业务流程。否则可能因为信息泄露导致对商户潜在的攻击，造成资金损失。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "因商户自身系统实现问题导致的业务异常，资金损失，由商户自行承担。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如商户对支付回调地址有IP防火墙策略限制，需要对以下网段开通允许名单，后续有变动时会在此处更新。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "124.70.118.0/24"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "139.159.166.0/24"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["商户系统收到回调通知时，需要在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3秒内"
            })
          }), "返回应答响应，否则华为支付会认为通知失败，会触发重试机制。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "商户系统收到异步通知并返回{\"resultCode\":\"000000\",\"resultDesc\":\"Success.\"}时，服务器异步通知参数callbackId才会失效。同一个异步通知请求的多次重试callbackId是不变的。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "接口约束"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请勿将开发者的服务器的IP允许清单设置成用于限制华为的出口IP地址。IP允许清单本身并不能提高安全性且会给业务发展带来约束，在消息层面已有更安全的RSA签名机制条件下，没有存在价值。若开发者不遵守此约定带来的后果将由开发者自行承担。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "地址必须支持HTTPS协议且具有合法商用证书，否则无法正常接收通知消息。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的TLS协议版本：1.2 / 1.3。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "支持的加密套件列表："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256\nTLS_DHE_RSA_WITH_AES_256_GCM_SHA384\nTLS_DHE_DSS_WITH_AES_128_GCM_SHA256\nTLS_DHE_DSS_WITH_AES_256_GCM_SHA384\nTLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\nTLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\nTLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256\nTLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\nTLS_AES_128_GCM_SHA256\n"
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
630820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
53786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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