"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["963245"], {
978119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_push_kit_guide_push_server_push_jwt_token_push_jwt_token_md_a88_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-push-kit-guide-push-server-push-jwt-token-push-jwt-token-md-a88.json
var site_docs_push_kit_guide_push_server_push_jwt_token_push_jwt_token_md_a88_namespaceObject = JSON.parse('{"id":"push-kit-guide/push-server/push-jwt-token/push-jwt-token","title":"基于服务账号生成鉴权令牌","description":"概述","source":"@site/docs/push-kit-guide/push-server/push-jwt-token/push-jwt-token.md","sourceDirName":"push-kit-guide/push-server/push-jwt-token","slug":"/push-kit-guide/push-server/push-jwt-token/","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-jwt-token/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"基于服务账号生成鉴权令牌","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-jwt-token","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"端云调试概述","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-server-intro/"},"next":{"title":"推送场景化消息","permalink":"/harmonyos-docs-site/push-kit-guide/push-server/push-scenes-send/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/push-kit-guide/push-server/push-jwt-token/push-jwt-token.md


const frontMatter = {
	title: '基于服务账号生成鉴权令牌',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/push-jwt-token',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '基于服务账号生成鉴权令牌';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "调用推送服务REST API",
  "id": "调用推送服务rest-api",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
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
        id: "基于服务账号生成鉴权令牌",
        children: "基于服务账号生成鉴权令牌"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["服务账号（Service Account）是一种可实现服务器与服务器之间接口鉴权的账号，在华为开发者联盟的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/console/api/myApi",
        children: "API Console"
      }), "上创建服务账号，您可根据返回的公私钥在业务应用中生成鉴权令牌，调用支持此类鉴权的华为公开API。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务账号令牌为JWT（JSON Web Token）格式字符串，JWT数据格式包括三个部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Header（头部）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payload（负载）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Signature（签名）"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这三个部分通过“.”进行连接，其中Signature为通过SHA256withRSA/PSS算法对Header与Payload拼接的字符串签名生成的字符串。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "eyJra*****JjNjBjMXXX.\neyJhd*****JodHRXXX.\nBRNss*****7az5oU7-Zp5g9X2WJVXXX\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["更多JWT的相关知识请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jwt.io/introduction/",
        children: "Introduction to JSON Web Tokens"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建服务账号密钥文件。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["您需要在华为开发者联盟的", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/console/api/myApi",
            children: "API Console"
          }), "上创建并下载推送服务API的服务账号密钥文件，凭证创建入口如下图所示，选择所在项目，创建“服务账号密钥“凭证。相关创建步骤请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/start/api-0000001062522591#section3554194116341",
            children: "API服务操作指南-服务账号密钥"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(951535)/* ["default"] */.A) + "",
            width: "1889",
            height: "698"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "您申请后的服务账号密钥样例文件形式可参考（文件内容已经经过脱敏处理）："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"project_id\": \"*****\",\n    \"key_id\": \"*****\",\n    \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIJQgIBADANBgkqhkiG9w0BAQEFAASCCSwwggkoAgEAAoICAQCKw6kJKtCh7qmMvp1u1dI27z2TKZrPOzHbQaXO/Eez0AWZ2EN+ouF496R3pfo7fQXC1XOT/YTbVC4DNZwWSMA54fu3/AOCY9Zzyi46OK*****==\\n-----END PRIVATE KEY-----\\n\",\n    \"sub_account\": \"*****\",\n    \"auth_uri\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/authorize\",\n    \"token_uri\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/token\",\n    \"auth_provider_cert_uri\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/certs\",\n    \"client_cert_uri\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/x509?client_id=\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "请确认以上密钥文件中的project_id是否与您的应用所属项目一致。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["您的应用所属项目ID查看方法：登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
            children: "AppGallery Connect"
          }), "网站，选择“开发与服务”，在项目列表中选择对应的项目，左侧导航栏选择“项目设置”，在该页面获取。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(619761)/* ["default"] */.A) + "",
            width: "1893",
            height: "482"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成JWT Header数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据服务账号密钥文件中的key_id（对应示例中的kid）字段拼接以下JSON体，对JSON体进行BASE64编码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"kid\": \"*****\",\n  \"typ\": \"JWT\",\n  \"alg\": \"PS256\"\n}\n"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "kid"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "服务账号密钥文件中key_id字段。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "typ"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "数据类型，固定为：JWT。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "alg"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "算法类型，固定为：PS256。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成JWT Payload数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据服务账号密钥文件中的sub_account（对应示例中的iss）字段拼接以下JSON体，对JSON体进行BASE64编码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"aud\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/token\",\n  \"iss\": \"*****\",\n  \"exp\": 1581410664,\n  \"iat\": 1581407064\n}\n"
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "字段名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "iss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "服务账号密钥文件中sub_account字段，标识数据生成者。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "aud"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["固定为：", (0,jsx_runtime.jsx)(_components.code, {
                  children: "https://oauth-login.cloud.huawei.com/oauth2/v3/token"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "iat"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "JWT签发UTC时间戳，为自UTC时间1970年1月1日00:00:00起的秒数（您的服务器时间需要校准为标准时间）。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "exp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "JWT到期UTC时间戳，比iat晚3600秒。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成JWT Token。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将完成BASE64编码后的Header字符串与Payload字符串，通过“.”进行连接，您可在业务应用中，通过服务账号密钥文件中的private_key（华为不进行存储，请您妥善保管），使用SHA256withRSA/PSS算法对拼接的字符串签名。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "至此，您已经完成服务账号鉴权令牌JWT Token的生成。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "调用推送服务rest-api",
      children: "调用推送服务REST API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您的应用调用推送服务REST API时，需要把已获得的服务账号鉴权令牌放在Authorization头部来进行鉴权。请使用v3版本调用推送服务REST API。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "POST \"https://push-api.cloud.huawei.com/v3/3158882***52863/messages:send\"\nAuthorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****\npush-type:0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(875946)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Authorization格式：Bearer后面拼接空格，再拼接获取的鉴权信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接口版本：请使用V3版本调用推送服务REST API。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["场景化消息", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/push-api/push-rest-api/push-rest-api-scenes/push-scenariozed-api-request-struct/push-scenariozed-api-request-struct",
        children: "请求体"
      }), "中，接口URL版本为V3（", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://push-api.cloud.huawei.com/v3/[projectId]/messages:send）时"
      }), "，仅支持给HarmonyOS Next/5.x及之后的系统版本推送通知；接口URL版本为V2（", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://push-api.cloud.huawei.com/v2/[projectId]/messages:send）时"
      }), "，仅支持给HarmonyOS 3.x/4.x的系统版本推送通知。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了方便您生成服务账号鉴权令牌，我们提供了Java语言的示例代码，请按照说明替换参数运行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果您使用其他开发语言，请选择对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jwt.io/libraries",
        children: "JWT开源组件"
      }), "进行开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中鉴权令牌生成步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["完成上述", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E5%BC%80%E5%8F%91%E6%AD%A5%E9%AA%A4",
            children: "开发步骤"
          }), "中的步骤1创建服务账号密钥文件后，从华为开发者联盟的", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/console/api/myApi",
            children: "API Console"
          }), "上创建并下载推送服务API的服务账号密钥文件（.json文件），格式如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(380132)/* ["default"] */.A) + "",
            width: "542",
            height: "221"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "以上json文件复制至工程中，参考如下代码进行解析（以private.json为例，本示例基于io.jsonwebtoken:jjwt 0.11.5版本开发，该库各版本API差异较大，请根据实际依赖版本自行适配）。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* 推荐的java版本为java8，maven依赖如下：\n  <dependency>\n   <groupId>com.fasterxml.jackson.core</groupId>\n   <artifactId>jackson-databind</artifactId>\n   <version>2.16.2</version>\n  </dependency>\n  <dependency>\n   <groupId>io.jsonwebtoken</groupId>\n   <artifactId>jjwt-api</artifactId>\n   <version>0.11.5</version>\n  </dependency>\n  <dependency>\n   <groupId>io.jsonwebtoken</groupId>\n   <artifactId>jjwt-impl</artifactId>\n   <version>0.11.5</version>\n   <scope>runtime</scope>\n  </dependency>\n  <dependency>\n   <groupId>io.jsonwebtoken</groupId>\n   <artifactId>jjwt-jackson</artifactId>\n   <version>0.11.5</version>\n   <scope>runtime</scope>\n  </dependency>\n  <dependency>\n   <groupId>org.bouncycastle</groupId>\n   <artifactId>bcprov-jdk18on</artifactId>\n   <version>1.78.1</version>\n   <scope>runtime</scope>\n  </dependency>\n*/\n\nimport com.fasterxml.jackson.databind.JsonNode;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\nimport io.jsonwebtoken.*;\nimport io.jsonwebtoken.lang.Maps;\n\nimport java.io.File;\nimport java.io.IOException;\nimport java.net.URL;\nimport java.nio.charset.StandardCharsets;\nimport java.security.KeyFactory;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.PrivateKey;\nimport java.security.interfaces.RSAPrivateKey;\nimport java.security.spec.InvalidKeySpecException;\nimport java.security.spec.PKCS8EncodedKeySpec;\nimport java.util.Base64;\nimport java.util.Map;\n\npublic class JsonWebTokenFactory {\n\n    // 实际开发时请将公网地址存储在配置文件或数据库\n    private static final String AUD = \"https://oauth-login.cloud.huawei.com/oauth2/v3/token\";\n\n    public static String createJwt() throws NoSuchAlgorithmException, InvalidKeySpecException, IOException, NullPointerException {\n        // 读取配置文件\n        ObjectMapper mapper = new ObjectMapper();\n        // 上述private.json文件放置于工程的src/main/resources路径下\n        URL url = JsonWebTokenFactory.class.getClassLoader().getResource(\"private.json\");\n        if (url == null) {\n            throw new NullPointerException(\"File not exist\");\n        }\n        JsonNode rootNode = mapper.readTree(new File(url.getPath()));\n\n        RSAPrivateKey privateKey = (RSAPrivateKey) generatePrivateKey(rootNode.get(\"private_key\").asText()\n                .replace(\"-----BEGIN PRIVATE KEY-----\", \"\")\n                .replace(\"-----END PRIVATE KEY-----\", \"\")\n                .replaceAll(\"\\\\s\", \"\"));\n        long iat = System.currentTimeMillis() / 1000;\n        long exp = iat + 3600;\n\n        Map<String, Object> header = Maps.<String, Object>of(JwsHeader.KEY_ID, rootNode.get(\"key_id\").asText())\n                .and(JwsHeader.TYPE, JwsHeader.JWT_TYPE)\n                .and(JwsHeader.ALGORITHM, SignatureAlgorithm.PS256.getValue())\n                .build();\n\n        Map<String, Object> payload = Maps.<String, Object>of(Claims.ISSUER, rootNode.get(\"sub_account\").asText())\n                .and(Claims.ISSUED_AT, iat)\n                .and(Claims.EXPIRATION, exp)\n                .and(Claims.AUDIENCE, AUD)\n                .build();\n\n        return Jwts.builder()\n                .setHeader(header)\n                .setPayload(new ObjectMapper().writeValueAsString(payload))\n                .signWith(privateKey, SignatureAlgorithm.PS256)\n                .compact();\n    }\n\n    private static PrivateKey generatePrivateKey(String base64Key) throws NoSuchAlgorithmException, InvalidKeySpecException {\n        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(Base64.getDecoder().decode(base64Key.getBytes(StandardCharsets.UTF_8)));\n        KeyFactory keyFactory = KeyFactory.getInstance(\"RSA\");\n        return keyFactory.generatePrivate(keySpec);\n    }\n\n    public static void main(String[] args) {\n        try {\n            // 获取鉴权令牌\n            String jwt = createJwt();\n        } catch (NoSuchAlgorithmException e) {\n            // 异常处理流程1\n        } catch (InvalidKeySpecException e) {\n            // 异常处理流程2\n        } catch (IOException e) {\n            // 异常处理流程3\n        } catch (NullPointerException e) {\n            // 异常处理流程4\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Node.js："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 依赖：npm i jsonwebtoken\nconst jwt = require('jsonwebtoken');\nconst fs = require('fs');\nlet privateJson;\ntry {\n  // readFileSync首个参数修改为private.json的实际路径\n  const data = fs.readFileSync('private.json', 'utf8');\n  privateJson = JSON.parse(data);\n  // 自定义Header\n  const header = {\n    alg: 'PS256', // 建议使用PS256算法\n    kid: privateJson?.key_id,\n    typ: 'JWT'    // 类型为JWT\n  };\n  // 创建JWT载荷\n  const payload = {\n    iss: privateJson?.sub_account,\n    aud: 'https://oauth-login.cloud.huawei.com/oauth2/v3/token', // 实际开发时请将公网地址存储在配置文件或数据库\n    iat: Math.floor(Date.now() / 1000),\n    exp: Math.floor(Date.now() / 1000) + 3600\n  };\n  const private_key = privateJson?.private_key;\n  // 将字符串中的 \\\\n 替换成真正的换行符 \\n，再按换行符分割为数组\n  const lines = private_key.replace(/\\\\n/g, '\\n').split('\\n');\n  // 取前三行\n  const firstThreeLines = lines.slice(0, 3);\n  // 重新拼接成一个三行的字符串：\n  const PRIVATE_KEY = firstThreeLines.join('\\n');\n  // 获取鉴权令牌\n  const token = jwt.sign(payload, PRIVATE_KEY, { algorithm: 'PS256', header: header });\n} catch (error) {\n  console.error(\"处理文件时出错:\", error);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Go："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 依赖：go get github.com/golang-jwt/jwt/v5\n\npackage main\n\nimport (\n    \"encoding/json\"\n    \"encoding/pem\"\n    \"errors\"\n    \"fmt\"\n    \"github.com/golang-jwt/jwt/v5\"\n    \"log\"\n    \"os\"\n    \"strings\"\n    \"time\"\n)\n\ntype ServiceAccountKey struct {\n    KeyID      string `json:\"key_id\"`\n    SubAccount string `json:\"sub_account\"`\n    PrivateKey string `json:\"private_key\"`\n}\n\nfunc main() {\n    // 替换为实际JSON文件路径，此处以本文件同级目录为例\n    signedToken, err := generateJWTToken(\"private.json\")\n    if err != nil {\n        log.Fatalf(\"Failed to generate JWT token: %v\", err)\n    }\n\n    // signedToken为鉴权令牌，调用推送服务REST API时放在Authorization头部来进行鉴权。\n    sendMessage(signedToken)\n}\n\nfunc sendMessage(token string) {\n    // 自行实现业务流程\n}\n\nfunc generateJWTToken(keyFile string) (string, error) {\n    saKey, err := loadServiceAccountKey(keyFile)\n    if err != nil {\n        return \"\", err\n    }\n\n    formattedPrivateKey, err := formatPrivateKey(saKey.PrivateKey)\n    if err != nil {\n        return \"\", err\n    }\n\n    privateKey, err := jwt.ParseRSAPrivateKeyFromPEM([]byte(formattedPrivateKey))\n    if err != nil {\n        return \"\", fmt.Errorf(\"failed to parse private key: %w\", err)\n    }\n\n    token, err := buildJWTToken(saKey.KeyID, saKey.SubAccount)\n    if err != nil {\n        return \"\", err\n    }\n\n    return token.SignedString(privateKey)\n}\n\n// buildJWTToken 构造 JWT token 对象\nfunc buildJWTToken(keyID, subAccount string) (*jwt.Token, error) {\n    now := time.Now().UTC()\n    iat := now.Unix()\n    exp := iat + 3600 // token 过期时间：一小时后\n\n    claims := jwt.MapClaims{\n        // 实际开发时请将公网地址存储在配置文件或数据库\n        \"aud\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/token\",\n        \"iss\": subAccount,\n        \"exp\": exp,\n        \"iat\": iat,\n    }\n\n    token := jwt.NewWithClaims(jwt.SigningMethodPS256, claims)\n\n    // 设置 header\n    token.Header[\"kid\"] = keyID\n    token.Header[\"typ\"] = \"JWT\"\n    token.Header[\"alg\"] = \"PS256\"\n\n    return token, nil\n}\n\n// loadServiceAccountKey 从 JSON 文件加载服务账号密钥\nfunc loadServiceAccountKey(filename string) (*ServiceAccountKey, error) {\n    data, err := os.ReadFile(filename)\n    if err != nil {\n        return nil, fmt.Errorf(\"failed to read key file: %w\", err)\n    }\n\n    var saKey ServiceAccountKey\n    if err := json.Unmarshal(data, &saKey); err != nil {\n        return nil, fmt.Errorf(\"failed to parse key file: %w\", err)\n    }\n\n    if saKey.KeyID == \"\" || saKey.SubAccount == \"\" || saKey.PrivateKey == \"\" {\n        return nil, errors.New(\"invalid service account key file: missing required fields\")\n    }\n\n    return &saKey, nil\n}\n\n// formatPrivateKey 格式化私钥字符串为 PEM 格式\nfunc formatPrivateKey(privateKeyStr string) (string, error) {\n    trimmed := strings.TrimSpace(privateKeyStr)\n\n    // 如果已经是 PEM 格式，则直接返回\n    if strings.HasPrefix(trimmed, \"-----BEGIN PRIVATE KEY-----\") &&\n        strings.HasSuffix(trimmed, \"-----END PRIVATE KEY-----\") {\n        return trimmed, nil\n    }\n\n    block, _ := pem.Decode([]byte(trimmed))\n    if block == nil {\n        return \"\", errors.New(\"failed to decode PEM block\")\n    }\n\n    pemBytes := pem.EncodeToMemory(block)\n    if pemBytes == nil {\n        return \"\", errors.New(\"failed to encode private key to PEM format\")\n    }\n\n    return string(pemBytes), nil\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# 依赖：pip install PyJWT cryptography\n\nimport jwt\nimport json\nimport time\nfrom cryptography.hazmat.primitives import serialization\n\ndef load_private_key_from_json(json_file_path):\n    \"\"\"\n    从JSON文件中加载私钥信息\n    :param json_file_path: JSON文件路径\n    :return: (key_id, sub_account, private_key_pem)\n    \"\"\"\n    with open(json_file_path, 'r') as f:\n        data = json.load(f)\n\n    # 获取KID和ISS\n    key_id = data.get('key_id')\n    sub_account = data.get('sub_account')\n\n    # 将私钥转换为PEM格式\n    private_key_str = data.get('private_key')\n    private_key_pem = serialization.load_pem_private_key(\n        private_key_str.encode(),\n        password=None\n    )\n\n    return key_id, sub_account, private_key_pem\n\ndef generate_jwt_token(json_file_path):\n    # 从JSON文件加载信息\n    kid, iss, private_key = load_private_key_from_json(json_file_path)\n\n    # 当前时间和过期时间（示例中使用固定值，实际应根据需求计算）\n    iat = int(time.time())\n    exp = iat + 3600\n\n    # 构造Header\n    header = {\n        \"kid\": kid,\n        \"typ\": \"JWT\",\n        \"alg\": \"PS256\"\n    }\n\n    # 构造Payload\n    payload = {\n        # 实际开发时请将公网地址存储在配置文件或数据库\n        \"aud\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/token\",\n        \"iss\": iss,\n        \"exp\": exp,\n        \"iat\": iat\n    }\n\n    # 生成JWT Token\n    token = jwt.encode(\n        payload=payload,\n        key=private_key,\n        algorithm='PS256',\n        headers=header\n    )\n\n    return token\n\ndef send_message(jwt_token):\n    # 自行实现业务流程\n    pass\n\nif __name__ == \"__main__\":\n    json_file = \"private.json\"  # 替换为实际JSON文件路径，此处以本文件同级目录为例\n\n    try:\n        # jwt_token 为鉴权令牌，调用推送服务REST API时放在Authorization头部来进行鉴权。\n        jwt_token = generate_jwt_token(json_file)\n        send_message(jwt_token)\n    except Exception as e:\n        print(f\"Error generating JWT token: {str(e)}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PHP："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<?php\n// 依赖：composer require lcobucci/jwt:^5.4.2\n// 依赖：composer require lcobucci/jwt-rsassa-pss\n// php: ~8.2.0 || ~8.3.0 || ~8.4.0\nrequire 'vendor/autoload.php';\n\nuse Lcobucci\\JWT\\Configuration;\nuse Lcobucci\\JWT\\Signer\\RsaPss\\Sha256;\nuse Lcobucci\\JWT\\Signer\\Key\\InMemory;\n\nclass ServiceAccount\n{\n    public string $keyId;\n    public string $subAccount;\n    public string $privateKey;\n    public string $tokenURI;\n\n    public function __construct(string $keyId, string $subAccount, string $privateKey, string $tokenURI)\n    {\n        $this->keyId = $keyId;\n        $this->subAccount = $subAccount;\n        $this->privateKey = $privateKey;\n        $this->tokenURI = $tokenURI;\n    }\n}\n\nfunction loadServiceAccount(string $filePath): ServiceAccount\n{\n    if (!file_exists($filePath)) {\n        throw new RuntimeException(\"配置文件不存在: $filePath\");\n    }\n\n    $json = file_get_contents($filePath);\n    $config = json_decode($json, true);\n    if (json_last_error() !== JSON_ERROR_NONE) {\n        throw new RuntimeException(\"JSON解析错误: \" . json_last_error_msg());\n    }\n\n    // 验证必要字段\n    $requiredKeys = ['key_id', 'sub_account', 'private_key', 'token_uri'];\n    foreach ($requiredKeys as $key) {\n        if (!isset($config[$key])) {\n            throw new RuntimeException(\"配置缺少必要字段: $key\");\n        }\n    }\n\n    // 处理私钥中的换行符\n    $privateKey = str_replace('\\n', \"\\n\", $config['private_key']);\n\n    return new ServiceAccount(\n        $config['key_id'],\n        $config['sub_account'],\n        $privateKey,\n        $config['token_uri']\n    );\n}\n\nfunction sendMessage()\n{\n    // 自行实现业务流程\n}\n\nfunction generateJWTToken(ServiceAccount $serviceAccount)\n{\n    $now = new DateTimeImmutable();\n    $expire = $now->modify(\"+3600 seconds\");\n\n    $configuration = Configuration::forSymmetricSigner(\n        new Sha256(),\n        InMemory::plainText($serviceAccount->privateKey)\n    );\n\n    return $configuration->builder()\n        ->withHeader('alg', 'PS256') // 指定PS256算法\n        ->withHeader('typ', 'JWT')   // JWT类型\n        ->withHeader('kid', $serviceAccount->keyId) // 密钥ID\n        ->issuedBy($serviceAccount->subAccount) // iss\n        ->permittedFor($serviceAccount->tokenURI) // aud\n        ->issuedAt($now) // iat\n        ->expiresAt($expire) // exp\n        ->getToken($configuration->signer(), $configuration->signingKey())\n        ->toString();\n}\n\nfunction main()\n{\n    try {\n        // 替换为JSON文件实际路径，此处以与本文件同级目录为例\n        $filePath = 'private.json';\n        $serviceAccount = loadServiceAccount($filePath);\n        $signedToken = generateJWTToken($serviceAccount);\n\n        // signedToken为鉴权令牌，调用推送服务REST API时放在Authorization头部来进行鉴权。\n        sendMessage($signedToken);\n    } catch (Exception $e) {\n        error_log(\"Error: \" . $e->getMessage());\n        exit(1);\n    }\n}\n\nmain();\n?>\n"
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
951535(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479129-4cae4381104c2662bad95db363022fd2.png");

},
619761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799480-ca43a29f925299e2815e169c04904cb9.png");

},
380132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439175-dd3ca13aa5395a86a4f0c2957606dc65.png");

},
875946(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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