"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["444125"], {
599110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_payment_kit_guide_payment_preparations_payment_server_connect_payment_server_connect_md_0b4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-payment-kit-guide-payment-preparations-payment-server-connect-payment-server-connect-md-0b4.json
var site_docs_payment_kit_guide_payment_preparations_payment_server_connect_payment_server_connect_md_0b4_namespaceObject = JSON.parse('{"id":"payment-kit-guide/payment-preparations/payment-server-connect/payment-server-connect","title":"云侧服务准备","description":"Payment Kit服务提供了支付系统相关的一系列API接口。为减少API接口的接入工作量，提供了相应java版本的Maven依赖用于云侧服务对接。","source":"@site/docs/payment-kit-guide/payment-preparations/payment-server-connect/payment-server-connect.md","sourceDirName":"payment-kit-guide/payment-preparations/payment-server-connect","slug":"/payment-kit-guide/payment-preparations/payment-server-connect/","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-server-connect/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"云侧服务准备","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-server-connect","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"端侧应用配置","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-config-app-identity-info/"},"next":{"title":"（可选）数字人民币接入准备","permalink":"/harmonyos-docs-site/payment-kit-guide/payment-preparations/payment-digital-cny-pay-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/payment-kit-guide/payment-preparations/payment-server-connect/payment-server-connect.md


const frontMatter = {
	title: '云侧服务准备',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/payment-server-connect',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '云侧服务准备';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "集成Maven依赖",
  "id": "集成maven依赖",
  "level": 2
}, {
  "value": "配置初始化",
  "id": "配置初始化",
  "level": 2
}, {
  "value": "业务接口请求",
  "id": "业务接口请求",
  "level": 2
}, {
  "value": "通知回调处理",
  "id": "通知回调处理",
  "level": 2
}, {
  "value": "敏感信息处理",
  "id": "敏感信息处理",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "云侧服务准备",
        children: "云侧服务准备"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Payment Kit服务提供了支付系统相关的一系列API接口。为减少API接口的接入工作量，提供了相应java版本的Maven依赖用于云侧服务对接。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可通过Maven集成来完成服务器开发环境的构建，以此来快速使用华为支付提供的API接口。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["可下载", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/paymentkit-sample-code-serverdemo-java",
        children: "示例代码-服务端"
      }), "用以快速完成商户服务器接入。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(956485)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因业务发展需要，API接口响应、通知回调请求字段可能会发生变动，如开发者自行实现验签逻辑，一定要使用原始的字符串转为Map对象进行验签处理后再转换成自定义的业务对象去使用，以确保验签正常通过。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "商户使用提供的示例代码接入华为支付前请确保网络已正常连接，可以从华为支付仓库地址正常拉取Maven依赖。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发环境：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.oracle.com/java/technologies/javase-downloads.html",
        children: "JDK"
      }), " 1.8及以上。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "集成maven依赖",
      children: "集成Maven依赖"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例代码pom.xml文件中已配置仓库地址，如无法正常拉取依赖，可在Maven配置文件“settings.xml”中添加华为支付的Maven仓库地址。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<mirror>\n  <id>central</id>\n  <mirrorOf>central</mirrorOf>\n  <url>https://developer.huawei.com/repo/</url>\n</mirror>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在示例代码pom.xml文件中已引入jar包的Maven坐标。如商户自己构建工程则需在pom.xml文件中引入如下坐标："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<dependency>\n  <groupId>com.huawei.petalpay</groupId>\n  <artifactId>pay-java</artifactId>\n  <version>1.0.0.331</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置初始化",
      children: "配置初始化"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将以下商户相关配置添加到示例代码配置文件src/main/resources/petalpayconfig.properties。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户号，获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-shanghuhao-0000001725982508",
          children: "查询商户号信息"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户私钥，获取途径请参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-certificates-config",
          children: "准备证书"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "商户私钥签名类型，RSA或SM2。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户证书ID，获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-certificates-config#%E4%B8%8A%E4%BC%A0%E5%95%86%E6%88%B7%E8%AF%81%E4%B9%A6",
          children: "上传商户证书"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["鸿蒙支付服务验签公钥，获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/payment-kit-guide/payment-preparations/payment-certificates-config#%E4%B8%8B%E8%BD%BD%E5%8D%8E%E4%B8%BA%E6%94%AF%E4%BB%98%E8%AF%81%E4%B9%A6",
          children: "下载华为支付证书"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["鸿蒙支付服务加密公钥（非必选），涉及接口入参敏感字段（接口会做标注）加密时需配置，参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%95%8F%E6%84%9F%E4%BF%A1%E6%81%AF%E5%A4%84%E7%90%86",
          children: "敏感信息处理"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["商户号关联的APPID，获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-appidguanli-0000001757041165",
          children: "AppID管理及关联"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置内容示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 商户号\nPETALPAY.MERC_NO=121540000***\n# 商户私钥\nPETALPAY.MERC_PRIVATE_KEY=MIIJQwIBADAN=9w0BAQEFAASCCS0wg******************************CldcDlDCSsdfDceCSDr+RyvJdfcXssdEA=\n# 商户证书ID\nPETALPAY.MERC_AUTH_ID=101540200089***\n# 商户私钥签名类型\nPETALPAY.SIGN_TYPE=RSA\n# 鸿蒙支付服务域名\nPETALPAY.SERVER_HOST=https://petalpay-developer.cloud.huawei.com.cn\n# 鸿蒙支付服务验签公钥\nPETALPAY.HW_PAY_PUBLIC_KEY_FOR_CALLBACK=6D015316F09CB747E4467******************************DB46DA4BD0960ADD500D84912\n# 鸿蒙支付服务加密公钥（非必选）\nPETALPAY.HW_PUBLIC_KEY_FOR_SESSIONKEY=042A7D32FA19C29D3E722D6C4ACAC0B******************************E5A5B1C8120DAC9882E4B093B9CE7A38296F87F41747D319A\n# 商户号关联的APPID\nPETALPAY.APPID=111831***\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务接口请求",
      children: "业务接口请求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取发起请求客户端对象"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可通过工具类MercConfigUtil提供的方法getMercConfig快速获取PetalPayConfig对象来构建请求客户端，对应配置项获取及配置参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E9%85%8D%E7%BD%AE%E5%88%9D%E5%A7%8B%E5%8C%96",
            children: "配置初始化"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 商户配置\npublic static PetalPayConfig getMercConfig() {\n    return PetalPayConfig.builder().callerId(MERC_NO) // （必填）商户号\n        .appId(APP_ID) // （必填）商户号关联的APPID\n        .privateKey(MERC_PRIVATE_KEY) // （必填）商户私钥\n        .authId(MERC_AUTH_ID) // （必填）商户证书ID\n        .signType(SIGN_TYPE) // （选填）商户公私钥类型，默认RSA加密\n        .petalpayPublicKey(HW_PAY_PUBLIC_KEY_FOR_CALLBACK) // （非必填）验签公钥(和接口级配置needVerifyRsp对应，公钥和商户通知回调验签公钥同一个)\n        .domainHost(SERVER_HOST).build();\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式一"
            })
          }), "：使用默认实现的请求客户端工具类。通过PetalPayConfig构建请求客户端对象示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private static PetalPayClient payClient = new DefaultPetalPayClient(MercConfigUtil.getMercConfig());\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "方式二"
            })
          }), "：自定义实现请求客户端工具类。开发者如果需要自定义接口请求的client，用于处理请求中的日志打印等操作，可以通过继承PetalPayClient 来实现。示例如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public class MercPetalPayClient extends PetalPayClient {\n    public MercPetalPayClient(PetalPayConfig petalPayConfig) {\n        super(petalPayConfig);\n    }\n    @Override\n    public String doPost(String url, Map<String, String> headers, String requestBody) throws Exception {\n        // todo\n    }\n    @Override\n    public String doGet(String url, Map<String, String> headers, String requestBody) throws Exception {\n        // todo\n    }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(457951)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "需要使用最新开放的API接口，如示例代码未及时更新，未找到默认提供用于接口请求的对象信息，可直接调用PetalPayClient的execute方法构建接口请求。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "由于PetalPayClient.execute()方法及DefaultPetalPayClient实现涉及通过SecureRandom.getInstanceStrong()获取安全随机数，如果服务器熵值不足，可能会导致请求阻塞，以下处理方式可供参考："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式一：通过三方服务补充服务器熵值。以下为通过haveged服务补充熵值参考。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# 查看熵值\ncat /proc/sys/kernel/random/entropy_avail\n# 安装haveged\nyum install haveged\n# 启动haveged\nsystemctl start haveged.service\n# 开启haveged服务开机自启动\nsystemctl enable haveged.service\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "方式二：开发者参照DefaultPetalPayClient自定义实现请求客户端工具类并通过RequestConfig对象tranceId字段（建议每次请求都更新该字段）来主动传递tranceId，避免自动通过SecureRandom.getInstanceStrong()生成安全随机数导致请求阻塞。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "public <T> T execute(String httpMethod, String apiUrl, Class<T> rspType, RequestConfig requestConfig, Object requestObj) throws Exception;\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "组装请求参数"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "预下单请求参数组装示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public static PreOrderCreateRequestV2 getPreOrderCreateRequestV2() {\n    return PreOrderCreateRequestV2.builder()\n        .mercOrderNo(\"pay-example-\" + System.currentTimeMillis()) // 每次订单号都要变，请将pay-example-修改为商户自己的订单前缀\n        .appId(MercConfigUtil.APP_ID)  // appId，需要配置为与商户绑定的正确的appId\n        .mercNo(MercConfigUtil.MERC_NO) // 商户的商户号\n        .tradeSummary(\"请修改为对应的商品简称\") // 请修改为商品简称\n        .totalAmount(2L)\n        .callbackUrl(\"https://www.xxxxxx.com/hw/pay/callback\") //回调通知地址，通知URL必须为直接可访问的URL，要求为https地址。最大长度为512。请替换为格式正确的结果通知回调地址。\n        .build();\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请求业务接口"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["不同API接口调用URI不一样，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/payment-api/payment-rest/payment-merc/payment-pay/payment-prepay/payment-prepay",
            children: "API参考"
          }), "文档。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "APP预下单请求示例如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "public CommonResponse aggrPreOrderForAppV2() {\n    // 组装对象\n    PreOrderCreateRequestV2 preOrderReq = getPreOrderCreateRequestV2();\n    PreOrderCreateResponse response = null;\n    try {\n        response = payClient.execute(\"POST\", \"/api/v2/aggr/preorder/create/app\", PreOrderCreateResponse.class,\n            preOrderReq);\n    } catch (Exception e) {\n        // todo 异常处理\n        log.error(\"request error \", e);\n        return CommonResponse.buildErrorRsp(e.getMessage());\n    }\n    if (!validResponse(response)) {\n        // todo 异常处理\n        log.error(\"response is invalid \", response);\n        return CommonResponse.buildFailRsp(response);\n    }\n    // 获取prepayId构建orderStr返回\n    return CommonResponse.buildSuccessRsp(payClient.buildOrderStr(response.getPrepayId()));\n}\npublic static boolean validResponse(BaseGwRspWithSign rsp) {\n    return rsp != null && \"000000\".equals(rsp.getResultCode());\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通知回调处理",
      children: "通知回调处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可使用VerifyTools.getCallbackResult方法自动处理回调结果验签并返回响应给华为支付服务器以及实现CallBackHandleInterface接口来处理回调结果。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通知回调处理示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public CallBackBaseResponse transactionResultNotify(@RequestBody Object callbackRequest) {\n    String callbackStr = JSONObject.toJSONString(callbackRequest);\n    return VerifyTools.getCallbackResult(callbackStr, MercConfigUtil.HW_PAY_PUBLIC_KEY_FOR_CALLBACK, new CallBackHandleInterface() {\n        @Override\n         public void fail(CallBackBaseResponse response, String reqString) {\n              // 未获取到字节流或者验签失败\n              // 商户自己业务处理\n              log.error(\"CallBack failed: \", response != null ? response.getResultCode() : null);\n         }\n         @Override\n         public void success(String reqString) {\n              NotifyPaymentReq callbackReq = JSONObject.parseObject(reqString, NotifyPaymentReq.class);\n              // 验签成功，商户自己业务处理\n         }\n    });\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关于通知回调更多具体要求可参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-rest/payment-rest-overview/payment-rest-overview#%E9%80%9A%E7%9F%A5%E5%9B%9E%E8%B0%83%E6%8E%A5%E5%8F%A3%E8%AF%B4%E6%98%8E",
        children: "通知回调接口说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "敏感信息处理",
      children: "敏感信息处理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为了保证API接口请求通信过程中敏感信息字段（如用户的住址、银行卡号、手机号码等，涉及加密字段会在具体API接口中标注）的机密性，鸿蒙支付服务要求加密上送。 如开发者使用对应业务接口涉及字段加密，请联系华为侧工程师获取对应的SM2加密公钥（合作咨询可", (0,jsx_runtime.jsx)(_components.a, {
        href: "/payment-kit-guide/payment-service-support",
        children: "点击此处"
      }), "）。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "涉及密钥"
        })
      }), "："]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "密钥类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "来源"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "作用"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "华为支付提供。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密开发者生成的SM4密钥。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SM4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "开发者生成。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加密敏感信息字段。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理逻辑："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、开发者生成SM4对称密钥，用于加密敏感数据内容并作为入参传递给华为支付。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2、开发者使用华为支付提供的SM2密钥加密生成的SM4对称密钥并通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/payment-api/payment-model/payment-model#paymercauth",
        children: "PayMercAuth"
      }), ".sessionKey字段传递给华为支付用于解密敏感信息。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本质为SM4对称密钥加密，示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import com.huawei.petalpay.paymentservice.apiservice.client.model.MgmtSubmercRsp;\nimport com.huawei.petalpay.paymentservice.core.client.DefaultPetalPayClient;\nimport com.huawei.petalpay.paymentservice.core.client.PetalPayClient;\nimport com.huawei.petalpay.paymentservice.core.config.RequestConfig;\nimport com.huawei.petalpay.paymentservice.core.tools.SM4Util;\nimport com.huawei.petalpay.paymentservice.example.common.MercConfigUtil;\n\npublic class SignRegister {\n    public static void main(String[] args) {\n        PetalPayClient payClient = new DefaultPetalPayClient(MercConfigUtil.getMercConfig());\n        String sessionKey = SM4Util.getSM4GCMSessionKey();\n        String message = \"xxxxxx\";\n        RegisterSubmercReq req = new RegisterSubmercReq(SM4Util.getSM4GCMContent(sessionKey, message));\n        RequestConfig config = RequestConfig.builder()\n            .publicKeyForSessionKey(MercConfigUtil.HW_PUBLIC_KEY_FOR_SESSIONKEY)\n            .sessionKey(sessionKey)\n            .build();\n        try {\n            MgmtSubmercRsp response = payClient.execute(\"POST\", \"/api/v1/partner/mgmt/submerc/register\",\n                MgmtSubmercRsp.class, config, req);\n        } catch (Exception e) {\n            // todo 异常处理\n        }\n    }\n    static class RegisterSubmercReq {\n        private String message;\n        public RegisterSubmercReq(String message) {\n            this.message = message;\n        }\n    }\n}\n"
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
457951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
956485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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