"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["729996"], {
685741(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_real_name_service_payment_real_name_verification_payment_real_name_verification_md_50b_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-real-name-service-payment-real-name-verification-payment-real-name-verification-md-50b.json
var site_docs_payment_kit_guide_payment_real_name_service_payment_real_name_verification_payment_real_name_verification_md_50b_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-real-name-service/payment-real-name-verification/payment-real-name-verification","title":"实名信息验证/授权场景","description":"场景介绍","source":"@site/docs/payment-kit-guide/payment-real-name-service/payment-real-name-verification/payment-real-name-verification.md","sourceDirName":"payment-kit-guide/payment-real-name-service/payment-real-name-verification","slug":"/payment-kit-guide/payment-real-name-service/payment-real-name-verification/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-real-name-service/payment-real-name-verification/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"实名信息验证/授权场景","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-real-name-verification","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"引导用户绑卡场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-partner-bindcard/"},"next":{"title":"人脸核身实人验证场景","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-real-name-service/payment-real-name-face-verification/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-real-name-service/payment-real-name-verification/payment-real-name-verification.md


const frontMatter = {
	title: '实名信息验证/授权场景',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-real-name-verification',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '实名信息验证/授权场景';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接入流程",
  "id": "接入流程",
  "level": 2
}, {
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "实名信息验证",
  "id": "实名信息验证",
  "level": 3
}, {
  "value": "实名信息授权",
  "id": "实名信息授权",
  "level": 3
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "实名信息验证",
  "id": "实名信息验证-1",
  "level": 3
}, {
  "value": "实名信息授权",
  "id": "实名信息授权-1",
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
        id: "实名信息验证授权场景",
        children: "实名信息验证/授权场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.1(19)版本开始，新增支持实名信息验证/授权场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如应用/元服务登录、注册或账户认证等操作，开发者需要验证或获取用户实名信息时可接入实名信息验证/授权能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持商户模型：不涉及"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实名信息验证授权页面展示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(248351)/* ["default"] */.A) + "",
        width: "891",
        height: "452"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入流程",
      children: "接入流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为支付实名信息验证授权接入流程如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "步骤"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "开发准备"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请先完成开发准备后再进行下面的开发接入。  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-preparations/payment-config-app-identity-info",
              children: "端侧应用配置"
            }), "  - ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/payment-kit-guide/payment-preparations/payment-real-name-preparations",
              children: "用户信息验证授权接入准备"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "接入实名信息验证/授权"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["根据实名信息验证/授权场景", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
              children: "开发步骤"
            }), "完成接入。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过接入Payment Kit实名信息验证授权能力，可以简便快捷地实现用户实名信息验证或获取用户授权后的实名信息（可二选一）。具体接入流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(75481)/* ["default"] */.A) + "",
        width: "960",
        height: "779"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实名信息验证",
      children: "实名信息验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者客户端收集用户实名信息请求开发者服务端发起实名信息预验证。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者服务端请求Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-verifacation/payment-api-common-verification-preverify/payment-api-common-verification-preverify",
          children: "实名信息预验证"
        }), "接口获取预验证ID（preVerifyId）。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端返回预验证ID给开发者服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者服务端返回预验证信息给开发者客户端。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者客户端使用预验证ID调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-realnameservice/payment-realnameservice#realnameservicestartrealnameverification",
          children: "startRealNameVerification"
        }), "接口拉起实名信息验证页面。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端展示验证信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户同意授权实名信息校验，Payment Kit客户端请求Payment Kit服务端处理校验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端完成校验处理并返回校验结果给Payment Kit客户端展示给用户。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Payment Kit客户端同步返回", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "实名信息验证ID"
          })
        }), "给开发者客户端。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者客户端使用实名信息校验ID请求开发者服务端查询实名信息校验结果。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者服务端请求Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-verifacation/payment-api-common-verification-result/payment-api-common-verification-result",
          children: "实名信息验证结果查询"
        }), "接口查询验证结果。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端返回实名信息验证结果给开发者服务端。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者服务端将实名信息验证结果返回给开发者客户端，开发者客户端根据验证结果进行下一步业务处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实名信息授权",
      children: "实名信息授权"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者客户端如需要获取用户实名信息，可调用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-arkts/payment-realnameservice/payment-realnameservice#realnameservicestartrealnameauth",
          children: "startRealNameAuth"
        }), "接口拉起实名信息授权页面。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit客户端给用户展示实名信息授权页面。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户同意获取实名信息授权，Payment Kit客户端请求Payment Kit服务端校验授权处理"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payment Kit服务端完成校验处理并返回授权校验结果给Payment Kit客户端展示给用户。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Payment Kit客户端同步返回", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "实名信息授权ID"
          })
        }), "给开发者客户端。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者客户端使用实名信息授权ID请求开发者服务端查询实名信息。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["开发者服务端请求Payment Kit服务端", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-verifacation/payment-api-common-auth-result/payment-api-common-auth-result",
          children: "实名信息授权结果查询"
        }), "接口查询用户实名信息授权结果及用户信息。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Payment Kit服务端会使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-real-name-preparations#%E4%B8%8A%E4%BC%A0%E5%BC%80%E5%8F%91%E8%80%85%E5%85%AC%E9%92%A5%E5%8F%8A%E4%B8%8B%E8%BD%BD%E5%8D%8E%E4%B8%BA%E5%85%AC%E9%92%A5",
          children: "开发者上传的公钥证书"
        }), "进行隐私信息加密后返回给开发者服务端。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者服务端使用配对的私钥证书进行解密后获取到用户实名信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者服务端将用户实名信息返回给开发者客户端，开发者客户端根据业务需要，进行下一步处理。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["拉起用户实名信息验证授权页面接口。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-arkts/payment-realnameservice/payment-realnameservice#realnameservicestartrealnameverification",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startRealNameVerification(context: common.UIAbilityContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "common.UIExtensionContext, preVerifyId: string): Promise<string>;"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "startRealNameAuth(context: common.UIAbilityContext"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "common.UIExtensionContext): Promise<string>;"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实名信息验证-1",
      children: "实名信息验证"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "发起实名信息预验证（服务器开发）"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["为保证API接口请求的安全性和可靠性需要获取应用级凭证，构建", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#paydevauth",
            children: "PayDevAuth"
          }), "作为开放API接口请求头后再发起请求。", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-model/payment-model#paydevauth",
            children: "PayDevAuth"
          }), "定义示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Data\npublic class PayDevAuth {\n    // 应用ID\n    private String clientId;\n    // 应用级token\n    private String accessToken;\n    private String traceId;\n    private Long time;\n    // 开发者加密公钥ID。用于华为对接口响应敏感字段加密\n    private String developerEncKeyId;\n    // 华为加密公钥ID。用于开发者对接口请求敏感字段加密\n    private String petalpayEncKeyId;\n    // 开发者验签公钥ID。用于华为对开发者加签的请求报文验签\n    private String developerSignKeyId;\n    // 华为验签公钥ID。用于开发者对华为加签的响应报文验签\n    private String petalpaySignKeyId;\n    private String headerSign;\n    private String bodySign;\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构建请求头信息示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 获取accessToken\nprivate String getaccessToken(String clientId, String clientSecret) {\n    HashMap<String, String> params = new HashMap<>();\n    params.put(\"grant_type\", \"client_credentials\");\n    params.put(\"client_id\", clientId);\n    params.put(\"client_secret\", clientSecret);\n    Map<String, String> headers = new HashMap<>();\n    headers.put(\"Content-Type\", \"application/x-www-form-urlencoded\");\n    // restfulClient为http请求客户端对象，请自行实现相关对象及方法的处理逻辑。\n    ResponseEntity<Map> atRspResponseEntity = restfulClient.postForEntity(\n        \"https://oauth-login.cloud.huawei.com/oauth2/v3/token\", params, null, headers, Map.class);\n     return (String) atRspResponseEntity.getBody().get(\"access_token\");\n}\n\n// 构建PayDevAuth请求头\nprivate String buildPayMercAuth(HashMap<String, String> body) {\n    // 对body进行排序拼接\n    String bodyStr = SignStringUtil.signString(body);\n    // 构建 PayDevAuth 请求头\n    PayDevAuth payDevAuth = new PayDevAuth();\n    payDevAuth.setTraceId(\"tid\" + System.currentTimeMillis());\n    payDevAuth.setTime(System.currentTimeMillis());\n    // 获取accessToken\n    payDevAuth.setAccessToken(getAccessToken(\"clientId\", \"clientSecret\"));\n    // 获取签名priKey\n    String priKey = \"\";\n    // 请求体签名\n    String bodySign = Sm2Utils.sign(Objects.requireNonNull(priKey, \"The signing private key can’t null\"), bodyStr);\n    payDevAuth.setBodySign(bodySign);\n    // 请求头签名\n    String headerStr = ToStringUtil.signString(payDevAuth);\n    String headerSign = Sm2Utils.sign(priKey, headerStr);\n    payDevAuth.setHeaderSign(headerSign);\n    return JsonUtils.obj2Json(payDevAuth);\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请求", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-verifacation/payment-api-common-verification-preverify/payment-api-common-verification-preverify",
            children: "实名信息预验证"
          }), "接口获取预验证ID后返回给端侧拉起实名信息验证页面。参考以下示例代码："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(268803)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["人脸核身实人验证场景中，credentialIdNo、realName入参需要使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/payment-kit-guide/payment-preparations/payment-real-name-preparations#sm2%E5%8A%A0%E5%AF%86%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81%E5%8F%82%E8%80%83",
            children: "SM2加密"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public String getPreVerifyId(String clientId, String clientSecret, String credentialIdNo, String realName, String openId)\n    throws NoSuchAlgorithmException {\n    HashMap<String, String> body = new HashMap<>();\n    body.put(\"credentialType\", \"01\");\n    // 人脸核身实人验证场景\n    body.put(\"credentialIdNo\", getHashStr(credentialIdNo));\n    body.put(\"realName\", getHashStr(realName));\n    body.put(\"openId\", openId);\n    HashMap<String, String> header = new HashMap<>();\n    header.put(\"Content-Type\", \"application/json;charset=UTF-8\");\n    header.put(\"payDevAuth\", buildPayMercAuth(body));\n    // restfulClient为http请求客户端对象，请自行实现postForEntity请求方法。\n    ResponseEntity<Map> responseEntity = restfulClient.postForEntity(\n        \"https://petalpay-developer.cloud.huawei.com.cn/api/v1/realname/verification/preverify\", null, body, header, Map.class);\n    return (String) responseEntity.getBody().get(\"preVerifyId\");\n}\n\npublic String getHashStr(String input) throws NoSuchAlgorithmException {\n    byte[] encodedhash = MessageDigest.getInstance(\"SHA-256\")\n        .digest(input.getBytes(java.nio.charset.StandardCharsets.UTF_8));\n    StringBuilder hexString = new StringBuilder();\n    for (byte b : encodedhash) {\n        String hex = Integer.toHexString(0xff & b);\n        if (hex.length() == 1) {\n            hexString.append('0');\n        }\n        hexString.append(hex);\n    }\n    return hexString.toString();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "拉起实名信息验证（端侧开发）"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者客户端使用后端服务返回的预验证ID作为参数调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-arkts/payment-realnameservice/payment-realnameservice#realnameservicestartrealnameverification",
            children: "startRealNameVerification"
          }), "接口拉起用户实名信息验证页面。当接口通过.then()方法返回时，则表示当前接口请求成功，通过.catch()方法返回表示接口请求失败。当此次请求有异常时，可通过", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "error.code"
            })
          }), "获取错误码，错误码相关信息请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-arkts/payment-error-code/payment-error-code",
            children: "错误码"
          }), "。示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { realNameService } from '@kit.PaymentKit';\nimport { common } from '@kit.AbilityKit';\n \n@Entry\n@Component\nstruct Index {\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  requestStartVerifyRealNameInfoPromise() {\n    // use your own preVerifyId\n    let preVerifyId = '';\n    realNameService.startRealNameVerification(this.context, preVerifyId)\n      .then((verifyResultId: string) => {\n        // verify success\n        console.info(`succeeded in verifying, verifyResultId: ${verifyResultId}`);\n      })\n      .catch((error: BusinessError) => {\n        // failed to verify\n        console.error(`failed to verify, error.code: ${error.code}, error.message: ${error.message}`);\n      });\n  }\n \n  build() {\n    Column() {\n      Button('requestStartVerifyRealNameInfoPromise')\n        .type(ButtonType.Capsule)\n        .width('50%')\n        .margin(20)\n        .onClick(() => {\n          this.requestStartVerifyRealNameInfoPromise();\n        })\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "查询实名信息验证结果（服务器开发）"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请求", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-verifacation/payment-api-common-verification-result/payment-api-common-verification-result",
            children: "实名信息验证结果查询"
          }), "接口获取实名信息验证结果返回给客户端。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实名信息授权-1",
      children: "实名信息授权"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "拉起实名信息授权（端侧开发）"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者客户端调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-arkts/payment-realnameservice/payment-realnameservice#realnameservicestartrealnameauth",
            children: "startRealNameAuth"
          }), "接口拉起用户实名信息授权页面。当接口通过.then()方法返回时，则表示当前接口请求成功，通过.catch()方法返回表示接口请求失败。当此次请求有异常时，可通过", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "error.code"
            })
          }), "获取错误码，错误码相关信息请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-arkts/payment-error-code/payment-error-code",
            children: "错误码"
          }), "。示例代码如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { BusinessError } from '@kit.BasicServicesKit';\nimport { realNameService } from '@kit.PaymentKit';\nimport { common } from '@kit.AbilityKit';\n \n@Entry\n@Component\nstruct Index {\n  context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  requestStartRealNameAuthPromise() {\n    realNameService.startRealNameAuth(this.context)\n      .then((realNameAuthId: string) => {\n        // authorize success\n        console.info(`succeeded in authorizing, realNameAuthId: ${realNameAuthId}`);\n      })\n      .catch((error: BusinessError) => {\n        // failed to authorise\n        console.error(`failed to authorise, error.code: ${error.code}, error.message: ${error.message}`);\n      });\n  }\n \n  build() {\n    Column() {\n      Button('requestStartRealNameAuthPromise')\n        .type(ButtonType.Capsule)\n        .width('50%')\n        .margin(20)\n        .onClick(() => {\n          this.requestStartRealNameAuthPromise();\n        })\n      }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "查询实名信息授权结果（服务器开发）"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["请求", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-api-common/payment-api-common-verifacation/payment-api-common-verification-result/payment-api-common-verification-result",
            children: "实名信息授权结果查询"
          }), "接口获取实名信息并使用publicKeyId配对的SM2私钥证书进行实名信息解密，根据业务需要返回给客户端。"]
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
248351(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439139-aed82410d865b2bb26c62dc0282be349.png");

},
75481(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959094-246e8e05b353ccd63fdf1728272b20ec.png");

},
268803(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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