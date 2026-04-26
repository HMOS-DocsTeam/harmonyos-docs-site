"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["153876"], {
786483(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_server_push_msg_receipt_push_msg_receipt_md_574_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-server-push-msg-receipt-push-msg-receipt-md-574.json
var site_docs_push_kit_guide_push_server_push_msg_receipt_push_msg_receipt_md_574_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-server/push-msg-receipt/push-msg-receipt","title":"（可选）开发消息回执","description":"场景介绍","source":"@site/docs/push-kit-guide/push-server/push-msg-receipt/push-msg-receipt.md","sourceDirName":"push-kit-guide/push-server/push-msg-receipt","slug":"/push-kit-guide/push-server/push-msg-receipt/","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-msg-receipt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"（可选）开发消息回执","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-msg-receipt","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"推送场景化消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-scenes-send/"},"next":{"title":"（可选）推送报告","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-delivery-report/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-server/push-msg-receipt/push-msg-receipt.md


const frontMatter = {
	title: '（可选）开发消息回执',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-msg-receipt',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '（可选）开发消息回执';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "回执服务开发",
  "id": "回执服务开发",
  "level": 2
}, {
  "value": "开通回执权益",
  "id": "开通回执权益",
  "level": 2
}, {
  "value": "配置回执参数",
  "id": "配置回执参数",
  "level": 2
}, {
  "value": "回执状态码",
  "id": "回执状态码",
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
        id: "可选开发消息回执",
        children: "（可选）开发消息回执"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "消息回执是指Push Kit服务端将消息推送到用户终端之后，端侧会给Push服务端反馈送达结果，与此同时，Push服务端会将消息送达状态以回执消息形式发送给您的应用回执服务端，方便您获取消息下达端侧后的状态，定位问题等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "受网络环境以及消息量的影响，消息回执在Push服务端收到端侧响应后发送，会存在一些延迟现象，如果较长时间无法收到回执，可能是设备处于离线状态。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "回执服务开发",
      children: "回执服务开发"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-api-msg-receipt/push-api-msg-receipt",
        children: "消息回执API"
      }), "开发您的回执服务器代码，服务接口地址将作为", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E9%85%8D%E7%BD%AE%E5%9B%9E%E6%89%A7%E5%8F%82%E6%95%B0",
        children: "配置回执参数"
      }), "中的回调地址。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开通回执权益",
      children: "开通回执权益"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站，选择“开发与服务”，在项目列表中选择对应的项目，左侧导航栏选择“项目设置”。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(488971)/* ["default"] */.A) + "",
            width: "851",
            height: "175"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在项目列表中找到您的项目，通过“增长 > 推送服务 > 配置”导航到“配置”页签。在该页面可以选择配置项目级回执或者应用级回执，需要注意的是项目级回执消息接收URL地址，对该项目下所有应用生效。如果您同时配置了项目级回执和应用级回执地址，则优先获取应用级回执地址信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(716142)/* ["default"] */.A) + "",
            width: "1069",
            height: "709"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "这里以应用级回执举例，选择需要配置回执的应用，点击“开通”应用回执状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(327090)/* ["default"] */.A) + "",
            width: "1060",
            height: "706"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "进入回执参数配置，可以选择已有回执或者新建回执。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(334483)/* ["default"] */.A) + "",
            width: "660",
            height: "385"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "配置回执参数",
      children: "配置回执参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "点击“新建回执”后，需要配置如下参数："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(752347)/* ["default"] */.A) + "",
        width: "643",
        height: "450"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置消息回执的名称和回调地址。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "回调地址配置完成后，Push Kit服务器会校验回执服务器（接收回执消息的应用服务器）提供的证书是否为商用CA签发证书。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "商用CA提示："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(840854)/* ["default"] */.A) + "",
                width: "482",
                height: "73"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "自签CA提示："
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(895717)/* ["default"] */.A) + "",
                width: "480",
                height: "152"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(558672)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "证书过期将导致您无法接收消息回执，请及时更换回执服务器证书。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置回调用户名（可选，下文描述为userName）和回调密钥（可选，下文描述为secret）进行身份验证。回调密钥支持自动生成。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "从回执消息的请求Header中获取X-HUAWEI-CALLBACK-ID，举例如下："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "X-HUAWEI-CALLBACK-ID:\ntimestamp=1563*****1261;nonce=a07bfa17-6d82-4b53-a9a2-07c*****eef1;value=E4YeO*********************QXF+c=\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "其中timestamp为回执消息的时间戳（毫秒级时间戳），nonce为UUID随机数，value为签名信息，签名方法为：Base64(HMAC-SHA256(secret, timestamp+nonce+userName))。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "开发者可以根据timestamp、nonce、userName、secret参考示例生成签名，与value的值比较进行签名验证。开发者也可点击网页提供的“生成密钥”自动生成回调密钥。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "生成签名示例（以下为java代码）："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "StringBuilder buf = new StringBuilder();\nbuf.append(timestamp);\nbuf.append(nonce);\n// 在回执配置中的回调用户名\nbuf.append(userName);\n// 在回执配置中的回调密钥\nString secret = \"your secret\";\nString signature = \"\";\ntry {\n  Mac mac = Mac.getInstance(\"HmacSHA256\");\n  // 老旧版本的回执配置密钥使用secret.getBytes(UTF_8)，新的回执配置密钥使用base64编码\n  SecretKeySpec key = new SecretKeySpec(Base64.getDecoder().decode(secret), \"HmacSHA256\");\n  mac.init(key);\n  byte[] encodeV = mac.doFinal(buf.toString().getBytes(UTF_8));\n  signature = Base64.getEncoder().encodeToString(encodeV);\n} catch (NoSuchAlgorithmException | InvalidKeyException e) {\n  // 打印错误日志\n  // ...\n}\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置回执支持版本"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(240933)/* ["default"] */.A) + "",
            width: "636",
            height: "70"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "V1回执不支持场景化消息发送，请使用V2回执。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "“测试回执”可以对回执地址进行功能测试，点击“提交”完成回执的创建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(454799)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "华为Push服务器和接收回执消息的应用服务器之间使用HTTPS协议，华为Push服务器会校验应用服务器提供证书的合法性，请使用商用CA签发的HTTPS证书。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "如果您的回执配置正确，点击“测试回执”后，您的回执服务器将收到由华为Push服务器发送的测试消息，同一回执版本该消息内容固定，仅供测试使用。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例报文："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "消息到达回执："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(12907)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "除卡片刷新场景外的其他场景化消息均支持消息到达回执。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: " {\n  \"statuses\": [\n    {\n      \"biTag\": \"bi**62\",\n      \"pushType\": 0,\n      \"token\": \"MsDZmCSyuS+Gd***********ZLs8Es\",\n      \"requestId\": \"169802**1701\",\n      \"appPackageName\": \"com.**.**\",\n      \"deliveryStatus\": {\n        \"result\": 0,\n        \"timestamp\": 1697741455082\n      }\n    }\n  ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "卡片刷新回执："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"statuses\": [\n    {\n      \"biTag\": \"bi**62\",\n      \"pushType\": 1,\n      \"token\": \"MsDZmCSyuS+Gd***********ZLs8Es\",\n      \"requestId\": \"169802**1701\",\n      \"appPackageName\": \"com.**.**\",\n      \"formStatus\": {\n        \"formId\": 10086,\n        \"result\": 0,\n        \"timestamp\": 1698027152082\n      }\n    }\n  ]\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "您的回执服务器必须返回成功的响应，才能测试通过，再点击“提交”完成回执的创建。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "成功响应："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n     \"code\": \"0\",\n     \"message\": \"success\"\n }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "回执状态码",
      children: "回执状态码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(524948)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过回执状态码定位问题之前，请优先检查", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct",
        children: "消息推送接口"
      }), "URL（", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://push-api.cloud.huawei.com/****v3****/****[projectId]****/messages:send）是否正确"
      }), "："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请使用v3版本的推送接口URL，不要使用v1或v2版本的推送接口URL，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-faq/push-faq-8",
          children: "场景化消息中的请求URL版本问题"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["请检查推送接口地址中的projectId，确保与您当前应用所属的项目保持一致，若不一致请更新推送接口URL中的projectId，并重新", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-server/push-jwt-token",
          children: "生成鉴权令牌"
        }), "，应用重新", (0,jsx_runtime.jsx)(_components.a, {
          href: "/push-kit-guide/push-preparations/push-get-token",
          children: "获取Push Token"
        }), "，再进行消息推送。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以基于接收到的消息回执码进行数据统计和分析，回执状态码如下表所示："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "回执状态码"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "状态码描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "原因及处理"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功送达"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不涉及。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token无效，应用卸载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "成功发送到设备后发现应用不存在，通常表示应用已卸载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token无效，Token不匹配"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["终端收到应用的Push消息，但Push消息带的Token与本地应用的Token不一致。请排查以下几种原因：  · 终端用户清除了本地应用数据。  · 终端用户通过卸载再安装的方式更新了本地应用。  · 您在应用中调用pushService.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-arkts/push-pushservice/push-pushservice#pushservicedeletetoken",
              children: "deleteToken"
            }), "()方法删除了本地应用的Token。  · 您在应用中调用了", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-arkts/push-aaid-api/push-aaid-api#aaiddeleteaaid",
              children: "deleteAAID"
            }), "()，该方法删除AAID的同时也会删除本地应用的Token。  · 终端设备恢复出厂设置后终端用户重新进入预安装应用或者重新安装并进入应用。  终端收到应用的Push消息，但检查本地数据存储中并没有应用的Token。请排查以下原因：  · 应用未激活。  若您的问题仍无法解决，请通过", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/support/feedback/#/",
              children: "在线提单"
            }), "提交问题。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通知消息不展示"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请排查以下三种原因：  · 用户关闭了设备上的系统通知总开关。  · 用户关闭了本应用的通知渠道开关。  · 用户开启了未成年模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "非活跃设备"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设备为非活跃设备（终端设备未接入网络达30天），消息不进行下发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其它错误"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内部网络异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "离线用户消息管控"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 设置了离线用户消息覆盖（服务端API中的collapseKey）功能，消息被覆盖掉了，未下发到设备。  2. 离线消息最多缓存120条，超过后旧消息被新消息覆盖。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标用户不匹配"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["下发消息时Push Token归属的用户与当前终端设备上的本地用户不匹配。请排查Push Token是否是当前本地用户下申请的。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), "  如您在进入隐私空间前的本地用户为用户A，点击进入隐私空间后，系统会将本地用户切换为用户B，如果此刻您使用归属用户A下的Push Token推送消息，则会返回该回执状态码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用进程不在，后台消息被缓存"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在终端设备上目标应用进程不存在导致后台消息被缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标应用中不存在指向的页面"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/push-kit-guide/push-scenes/push-alert/push-send-alert#%E7%82%B9%E5%87%BB%E6%B6%88%E6%81%AF%E5%8A%A8%E4%BD%9C",
              children: "点击消息动作"
            }), "检查应用skills标签配置和消息请求体中的clickAction字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "51"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "终端设备处于开机未解锁状态"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户重启终端设备后，点亮屏幕未解锁。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "102"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消息频控丢弃"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统会根据现网使用场景和流量进行管控，不合理的使用场景系统会进行频控。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "144"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "profileId不存在"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发送下行消息时请检查场景化消息payload中的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#notification",
              children: "profileId"
            }), "字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "151"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "推送消息未展示或卡片formId不存在"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1. 请检查卡片是否已经添加到终端设备桌面。  2. 请检查卡片刷新消息中指定的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#formupdatepayload-%E5%8D%A1%E7%89%87%E5%88%B7%E6%96%B0%E6%B6%88%E6%81%AF",
              children: "formId"
            }), "是否存在。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "155"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗通知更新失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请检查您的通知是否未创建或已经过期。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "156"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗通知消息乱序更新"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["实况窗通知消息携带", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
              children: "version"
            }), "小于当前版本，更新失败。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "158"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建的实况窗已存在"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在设备中已存在通过Live View Kit创建的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
              children: "activityId"
            }), "相同的实况窗。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "188"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "拉起应用失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请稍后重试。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "191"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "角标更新失败"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统内部设置角标异常。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消息频次限制"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["频次限制请参考消息发送", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-msg-freq-control/push-msg-freq-control#%E5%9C%BA%E6%99%AF%E5%8C%96%E6%B6%88%E6%81%AF%E9%A2%91%E6%8E%A7",
              children: "频次限制"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "259"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消息被拒绝"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1. 发送消息中存在违规内容。  2. 存在不安全的url。  请更换消息体内容或url。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "261"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片不存在"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["卡片刷新消息被Push服务端管控不下发（管控周期30天），建议做过滤处理减少无效推送。原因：不存在卡片刷新消息中指定", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#formupdatepayload-%E5%8D%A1%E7%89%87%E5%88%B7%E6%96%B0%E6%B6%88%E6%81%AF",
              children: "formId"
            }), "的卡片。  建议填写已分配过的formId，避免后续formId分配后，对应的卡片刷新消息被管控导致管控周期内无法下发。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "262"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片刷新次数达上限"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "卡片刷新消息被Push服务端管控不下发（管控周期1天），建议做过滤处理减少无效推送。原因：终端设备上对应的卡片刷新次数达到上限（未被Push服务端频次限制）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "264"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "消息未订阅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送的订阅消息，但实际未订阅。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "265"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "实况窗通知更新被管控"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发送的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
              children: "activityId"
            }), "对应的实况窗通知不存在，限制发送该activityId的实况窗通知消息24小时。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "268"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未携带status字段"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过Push Kit创建的实况窗，在对该实况窗更新时未携带", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
              children: "status"
            }), "字段。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "269"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "重复创建实况窗"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["通过Push Kit创建的实况窗重复（", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-param/push-scenariozed-api-request-param#liveviewpayload-%E5%AE%9E%E5%86%B5%E7%AA%97%E6%B6%88%E6%81%AF",
              children: "activityId"
            }), "相同）。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(113581)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您需要对上述状态中的2、5、6、10做过滤处理，减少对这些用户的无效推送。"
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
895717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479137-a2ef5dc71144ab9e7c927fa36f0eeaf7.png");

},
716142(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959134-243d1b876d90605d5c410ce7330f4db3.png");

},
524948(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
840854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
12907(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
488971(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
327090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479135-eda8613c1edf350fe0bad4939d0953d3.png");

},
240933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
558672(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
454799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
334483(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799486-5610cce8156cd3103c3637c4a7c9160b.png");

},
752347(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439181-a755a709a6efa3a231e2be36de3e79f1.png");

},
113581(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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