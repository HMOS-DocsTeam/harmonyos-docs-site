"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["658637"], {
37875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_iap_api_iap_rest_iap_jwt_description_iap_jwt_description_md_dbf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-iap-api-iap-rest-iap-jwt-description-iap-jwt-description-md-dbf.json
var site_docs_ref_iap_api_iap_rest_iap_jwt_description_iap_jwt_description_md_dbf_namespaceObject = JSON.parse('{"id":"iap-api/iap-rest/iap-jwt-description/iap-jwt-description","title":"生成服务端请求的token","description":"服务端API请求的Authorization标头中必须包含JWT格式的token用于鉴权。JSON Web Token（JWT）是一个开放标准（RFC 7519），定义了一种安全传输信息的方法，具体请参见jwt.io。可以使用从AppGallery Connect下载的私钥签名生成JWT。密钥的生成和下载请参见配置密钥。创建JWT格式的token需要以下几步：","source":"@site/docs-ref/iap-api/iap-rest/iap-jwt-description/iap-jwt-description.md","sourceDirName":"iap-api/iap-rest/iap-jwt-description","slug":"/iap-api/iap-rest/iap-jwt-description/iap-jwt-description","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-jwt-description/iap-jwt-description","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"生成服务端请求的token","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-jwt-description","kit":"应用服务","last_updated":"2026-04-22","slug":"iap-jwt-description"},"sidebar":"ref","previous":{"title":"公共说明","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-rest-common-statement/iap-rest-common-statement"},"next":{"title":"对返回结果验签","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/iap-api/iap-rest/iap-jwt-description/iap-jwt-description.md


const frontMatter = {
	title: '生成服务端请求的token',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-jwt-description',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'iap-jwt-description'
};
const contentTitle = '生成服务端请求的token';

const assets = {

};



const toc = [{
  "value": "创建JWT Header",
  "id": "创建jwt-header",
  "level": 2
}, {
  "value": "创建JWT Payload",
  "id": "创建jwt-payload",
  "level": 2
}, {
  "value": "创建JWT格式的token",
  "id": "创建jwt格式的token",
  "level": 2
}, {
  "value": "代码示例",
  "id": "代码示例",
  "level": 3
}, {
  "value": "Authorization说明",
  "id": "authorization说明",
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
        id: "生成服务端请求的token",
        children: "生成服务端请求的token"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["服务端API请求的Authorization标头中必须包含JWT格式的token用于鉴权。JSON Web Token（JWT）是一个开放标准（RFC 7519），定义了一种安全传输信息的方法，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jwt.io/",
        children: "jwt.io"
      }), "。可以使用从", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "下载的私钥签名生成JWT。密钥的生成和下载请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters#%E9%85%8D%E7%BD%AE%E5%AF%86%E9%92%A5",
        children: "配置密钥"
      }), "。创建JWT格式的token需要以下几步："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建JWT Header"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建JWT Payload"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建JWT格式的token"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建jwt-header",
      children: "创建JWT Header"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Header参数如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "alg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "算法类型，固定为ES256。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token类型，固定为JWT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "kid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["密钥ID，获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters#%E9%85%8D%E7%BD%AE%E5%AF%86%E9%92%A5",
              children: "配置密钥"
            }), "。如果有多个密钥，请使用对JWT进行签名的同一私钥的密钥ID。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建jwt-payload",
      children: "创建JWT Payload"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWT负载包含访问服务端API的一些关键信息，例如密钥颁发者ID、JWT签发时间和JWT到期时间等。JWT负载参数如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否必选"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["标识密钥颁发者ID（Issuer ID），获取方式请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters#%E9%85%8D%E7%BD%AE%E5%AF%86%E9%92%A5",
              children: "配置密钥"
            }), "的说明。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT的预期接收者，固定为iap-v1。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT签发时间，UTC时间戳，以秒为单位。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JWT到期时间，UTC时间戳，以秒为单位。  （exp-iat）即为JWT的有效期，有效期不能超过1小时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["APP ID，获取方式参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/iap-kit-guide/iap-preparations/iap-config-app-identity-info",
              children: "配置应用身份信息"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "digest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Request Body（json字符串）的hash值，用于验证Request Body的完整性，算法为SHA-256。  ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明："
              })
            }), " 如果Request Body为空，则传空字符串\"\"的hash值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建jwt格式的token",
      children: "创建JWT格式的token"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Header中指定的算法（ES256）以及密钥ID关联的私钥进行签名生成JWT，可以使用各种开源库来创建JWT格式的token，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jwt.io/",
        children: "jwt.io"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码示例",
      children: "代码示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(856524)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例代码仅以Java语言为例，Python、PHP、JS、Golang语言示例代码可通过在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/iapkit-sample-serverdemo",
        children: "IAP Kit-Sample-ServerDemo"
      }), "中切换代码分支查看。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import com.auth0.jwt.JWT;\nimport com.auth0.jwt.algorithms.Algorithm;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.security.KeyFactory;\nimport java.security.interfaces.ECPrivateKey;\nimport java.security.spec.PKCS8EncodedKeySpec;\nimport java.time.Duration;\nimport java.util.Base64;\nimport java.util.HashMap;\nimport java.util.Map;\nimport org.apache.commons.codec.digest.DigestUtils;\n\npublic class JWTGenerator {\n    /**\n     * Private key file path.\n     * For key generation and download, please refer to Configuring Keys.\n     */\n    private static final String JWT_PRI_KEY_PATH = \"/path/to/key/priKey.p8\"; // TODO: Need to replace it with the actual value.\n\n    /**\n     * JWT validity period, which is a UTC timestamp in seconds. The validity period cannot exceed 1 hour.\n     */\n    private static final long ACTIVE_TIME_SECOND = 3600;  // TODO: Need to replace it with the actual value.\n\n    private static final Map<String, Object> JWT_HEADER = new HashMap<>();\n\n    private static final Map<String, Object> JWT_PAYLOAD = new HashMap<>();\n\n    static {\n        // Algorithm type. The value is always ES256.\n        JWT_HEADER.put(\"alg\", \"ES256\");\n        // Token type. The value is always JWT.\n        JWT_HEADER.put(\"typ\", \"JWT\");\n        // Key ID.\n        JWT_HEADER.put(\"kid\", \"Key ID\");  // TODO: Need to replace it with the actual value.\n\n        // Key issuer ID.\n        JWT_PAYLOAD.put(\"iss\", \"Issuer ID\");  // TODO: Need to replace it with the actual value.\n        // Expected receiver of the JWT. The value is fixed at iap-v1.\n        JWT_PAYLOAD.put(\"aud\", \"iap-v1\");\n        // Time when the JWT is issued. The value is a UTC timestamp, in seconds.\n        // Re-put the value in the genJwt method.\n        JWT_PAYLOAD.put(\"iat\", 0);\n        // Time when the JWT expires. The value is a UTC timestamp, in seconds. exp-iat indicates the validity period of the JWT, which cannot exceed one hour.\n        // Re-put the value in the genJwt method.\n        JWT_PAYLOAD.put(\"exp\", 0);\n        // App ID.\n        JWT_PAYLOAD.put(\"aid\", \"App ID\");  // TODO: Need to replace it with the actual value.\n        // Hash value of the request body (JSON character string), which is used to verify the integrity of the body. The algorithm is SHA-256.\n        JWT_PAYLOAD.put(\"digest\", \"\");\n    }\n\n    public static String genJwt(String bodyStr) throws Exception {\n        try {\n            // Fetch the Private Key Content in PEM format.\n            Path filePath = Paths.get(JWT_PRI_KEY_PATH);\n            String fileString = new String(Files.readAllBytes(filePath), StandardCharsets.UTF_8);\n            String privateKey = fileString.replace(\"-----BEGIN PRIVATE KEY-----\", \"\")\n                .replaceAll(\"\\\\R+\", \"\")\n                .replace(\"-----END PRIVATE KEY-----\", \"\");\n            KeyFactory keyFactory = KeyFactory.getInstance(\"EC\");\n            byte[] privateKeyBytes = Base64.getDecoder().decode(privateKey);\n            PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(privateKeyBytes);\n            ECPrivateKey ecPrivateKey = (ECPrivateKey) keyFactory.generatePrivate(keySpec);\n            Map<String, Object> jwtPayload = new HashMap<>(JWT_PAYLOAD);\n            long signTime = System.currentTimeMillis() / Duration.ofSeconds(1).toMillis();\n            String digest = DigestUtils.sha256Hex(bodyStr);\n            jwtPayload.put(\"iat\", signTime);\n            jwtPayload.put(\"exp\", signTime + ACTIVE_TIME_SECOND);\n            jwtPayload.put(\"digest\", digest);\n            return JWT.create().withHeader(JWT_HEADER).withPayload(jwtPayload).sign(Algorithm.ECDSA256(ecPrivateKey));\n        } catch (Exception e) {\n            // TODO: Need to replace it with the actual business logic.\n            throw new Exception(e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pom文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<dependency>\n    <groupId>com.auth0</groupId>\n    <artifactId>java-jwt</artifactId>\n    <version>4.4.0</version>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "authorization说明",
      children: "Authorization说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用服务端API请求时，请求Header使用 Authorization: Bearer <JWT格式的token>传递鉴权信息，样例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Authorization: Bearer eyJhbGciOi---xxx.eyJpc3MiOm---xxx.WFquGEx5gf---xxx\n"
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
856524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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