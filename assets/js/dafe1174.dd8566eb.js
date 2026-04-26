"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["904267"], {
732955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_security_device_security_kit_guide_devicesecurity_prepare_devicesecurity_deviceverify_token_devicesecurity_deviceverify_token_md_daf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-security-device-security-kit-guide-devicesecurity-prepare-devicesecurity-deviceverify-token-devicesecurity-deviceverify-token-md-daf.json
var site_docs_system_security_device_security_kit_guide_devicesecurity_prepare_devicesecurity_deviceverify_token_devicesecurity_deviceverify_token_md_daf_namespaceObject = JSON.parse('{"id":"system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-token/devicesecurity-deviceverify-token","title":"基于服务账号生成鉴权令牌","description":"只有使用应用设备状态检测服务时才需要配置此章节。","source":"@site/docs/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-token/devicesecurity-deviceverify-token.md","sourceDirName":"system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-token","slug":"/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-token/","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-token/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"基于服务账号生成鉴权令牌","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-deviceverify-token","kit":"system/security","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开通Device Security服务","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-activateservice/"},"next":{"title":"（可选）申请使用受限权限","permalink":"/harmonyos-docs-site/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-prepare-declarepermissions/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-security/device-security-kit-guide/devicesecurity-prepare/devicesecurity-deviceverify-token/devicesecurity-deviceverify-token.md


const frontMatter = {
	title: '基于服务账号生成鉴权令牌',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-deviceverify-token',
	kit: 'system/security',
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(561471)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只有使用应用设备状态检测服务时才需要配置此章节。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["服务账号（Service Account）是一种可实现服务器与服务器之间接口鉴权的账号，在华为开发者联盟的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/console/overview",
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
      children: "这三个部分通过“.”进行连接，其中Signature为通过SHA256withRSA算法对Header与Payload拼接的字符串签名生成的字符串。"
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
          children: ["开发者需要在华为开发者联盟的", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/console/overview",
            children: "API Console"
          }), "上创建并下载服务账号的密钥文件，相关创建步骤请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/doc/start/api-0000001062522591#section91275725415",
            children: "API Console操作指南-服务账号密钥"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(824596)/* ["default"] */.A) + "",
            width: "919",
            height: "407"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(905323)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "您在开发者联盟需要申请开发者级的服务账号凭证。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "服务账号密钥样例文件形式可参考："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n    \"project_id\": \"*****\",\n    \"key_id\": \"*****\",\n    \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIJQgIBADANBgkqhkiG9w0BAQEFAASCCSwwggkoAgEAAoICAQCKw6kJKtCh7qmMvp1u1dI27z2TKZrPOzHbQaXO/Eez0AWZ2EN+ouF496R3pfo7fQXC1XOT/YTbVC4DNZwWSMA54fu3/AOCY9Zzyi46OK*****==\\n-----END PRIVATE KEY-----\\n\",\n    \"sub_account\": \"*****\",\n    \"auth_uri\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/authorize\",\n    \"token_uri\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/token\",\n    \"auth_provider_cert_uri\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/certs\",\n    \"client_cert_uri\": \"https://oauth-login.cloud.huawei.com/oauth2/v3/x509?client_id=*****\"\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成JWT Header数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据服务账号密钥文件中的key_id字段拼接以下JSON体，对JSON体进行BASE64编码。"
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
          children: "根据服务账号密钥文件中的sub_account字段拼接以下JSON体，对JSON体进行BASE64编码。"
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
                children: "aud"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["固定为：", (0,jsx_runtime.jsx)(_components.code, {
                  children: "https://oauth-login.cloud.huawei.com/oauth2/v3/token"
                }), "。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "iss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "服务账号密钥文件中sub_account字段，标识数据生成者。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "exp"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "JWT到期UTC时间戳，建议比“iat”晚3600秒。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "iat"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "JWT签发UTC时间戳，为自UTC时间1970年1月1日00:00:00的秒数（应用服务器时间需要校准为标准时间）。"
              })]
            })]
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成JWT Token数据。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将完成BASE64编码后的Header字符串与Payload字符串，通过“.”进行连接，并在开发者的应用中，通过服务账号密钥文件中的private_key（华为不进行存储，请您妥善保管），使用SHA256withRSA/PSS算法对拼接的字符串签名，最后将Header，Payload以及字符串签名通过“.”进行连接，即可得到Token数据。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为了方便您生成服务账号鉴权令牌，我们提供了Java语言的示例代码，请按照说明替换参数运行。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果您使用其他开发语言，请选择对应的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.jwt.io/libraries",
        children: "JWT开源组件"
      }), "进行开发。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import com.alibaba.fastjson.JSONObject;\nimport org.apache.commons.codec.binary.Base64;\nimport org.bouncycastle.jce.provider.BouncyCastleProvider;\n\nimport java.nio.charset.StandardCharsets;\nimport java.security.*;\nimport java.security.spec.InvalidKeySpecException;\nimport java.security.spec.PKCS8EncodedKeySpec;\nimport java.util.Objects;\n\npublic class JWTGenerateDemo_test {\n    // please replace it with the private_key in your json file\n    // this is the plain text in this demo, please encrypt the private key in your code, only get the string between\n    // '-----BEGIN PRIVATE KEY-----\\n' and '\\n-----END PRIVATE KEY-----\\n'\n    private static final String PRIVATE_KEY = \"xxxx\";\n\n    // please replace it with the sub_account in your json file\n    private static final String ISS = \"xxx\";\n\n    // please replace it with the key_id in your json file\n    private static final String KID = \"xxx\";\n\n    private static final String AUD = \"https://oauth-login.cloud.huawei.com/oauth2/v3/token\";\n\n    private static final String ALG_PS256 = \"PS256\";\n\n    private static final String DOT = \".\";\n\n    private static PrivateKey getPrivateKey(String key) throws NoSuchAlgorithmException, InvalidKeySpecException {\n        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(decodeBase64(key));\n        KeyFactory keyFactory = KeyFactory.getInstance(\"RSA\");\n        return keyFactory.generatePrivate(keySpec);\n    }\n\n    private static byte[] decodeBase64(String Base64Str) {\n        return Base64.decodeBase64(Base64Str.getBytes(StandardCharsets.UTF_8));\n    }\n\n    private String createJwt()\n            throws NoSuchAlgorithmException, InvalidKeySpecException, InvalidKeyException, SignatureException {\n        long iat = System.currentTimeMillis() / 1000;\n        long exp = iat + 3600;//JWT有效期3600s\n\n        // jwt header\n        JSONObject header = new JSONObject();\n        header.put(\"alg\", ALG_PS256);\n        header.put(\"kid\", KID);\n        header.put(\"typ\", \"JWT\");\n\n        // jwt payload\n        JSONObject payload = new JSONObject();\n        payload.put(\"aud\", AUD);\n        payload.put(\"iss\", ISS);\n        payload.put(\"exp\", exp);\n        payload.put(\"iat\", iat);\n\n        // jwt signature\n        byte[] encodeHeaderBytes = Base64.encodeBase64URLSafe(header.toString().getBytes(StandardCharsets.UTF_8));\n        byte[] encodePayloadBytes = Base64.encodeBase64URLSafe(payload.toString().getBytes(StandardCharsets.UTF_8));\n        String encodeHeader = new String(encodeHeaderBytes, StandardCharsets.UTF_8);\n        String encodePayload = new String(encodePayloadBytes, StandardCharsets.UTF_8);\n        String jwtHeaderAndPayload = encodeHeader + DOT + encodePayload;\n        Signature signatureInstance = Signature.getInstance(\"SHA256withRSA/PSS\", new BouncyCastleProvider());\n        signatureInstance.initSign(getPrivateKey(PRIVATE_KEY));\n        signatureInstance.update(jwtHeaderAndPayload.getBytes(StandardCharsets.UTF_8));\n        String signature =\n                new String(Objects.requireNonNull(Base64.encodeBase64URLSafe(signatureInstance.sign())), StandardCharsets.UTF_8);\n\n        return jwtHeaderAndPayload + DOT + signature;\n    }\n\n    public static void main(String args[])\n            throws InvalidKeySpecException, NoSuchAlgorithmException, SignatureException, InvalidKeyException {\n        JWTGenerateDemo_test JWTGenerateDemo = new JWTGenerateDemo_test();\n        JWTGenerateDemo.createJwt();//获取鉴权令牌\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "执行main()函数即可。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "推荐的java版本为java8，maven依赖如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<dependency>\n    <groupId>com.alibaba</groupId>\n    <artifactId>fastjson</artifactId>\n    <version>1.2.83</version>\n</dependency>\n<dependency>\n    <groupId>org.bouncycastle</groupId>\n    <artifactId>bcprov-jdk18on</artifactId>\n    <version>1.74</version>\n</dependency>\n<dependency>\n    <groupId>commons-codec</groupId>\n    <artifactId>commons-codec</artifactId>\n    <version>1.15</version>\n</dependency>\n"
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
561471(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
905323(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
824596(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958384-40989769f443a4822dc8b434cd0fd566.png");

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