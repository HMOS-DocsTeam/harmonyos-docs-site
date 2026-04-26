"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["348854"], {
320647(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_account_faq_account_faq_12_account_faq_12_md_597_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-account-faq-account-faq-12-account-faq-12-md-597.json
var site_docs_account_kit_guide_account_faq_account_faq_12_account_faq_12_md_597_namespaceObject = JSON.parse('{"id":"account-kit-guide/account-faq/account-faq-12/account-faq-12","title":"ID Token的使用场景与使用方法","description":"ID Token是OIDC（OpenID Connect）协议相对于OAuth 2.0协议扩展的一个用户身份凭证。","source":"@site/docs/account-kit-guide/account-faq/account-faq-12/account-faq-12.md","sourceDirName":"account-kit-guide/account-faq/account-faq-12","slug":"/account-kit-guide/account-faq/account-faq-12/","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-12/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"ID Token的使用场景与使用方法","sidebar_position":12,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-12","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Access Token和Refresh Token长度限制要求","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-11/"},"next":{"title":"未成年人模式开启后USB断连如何解决","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-13/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/account-faq/account-faq-12/account-faq-12.md


const frontMatter = {
	title: 'ID Token的使用场景与使用方法',
	sidebar_position: 12,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/account-faq-12',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'ID Token的使用场景与使用方法';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "字段说明",
  "id": "字段说明",
  "level": 2
}, {
  "value": "解析与验证",
  "id": "解析与验证",
  "level": 2
}, {
  "value": "<strong><strong>服务端解析与验证</strong></strong>",
  "id": "服务端解析与验证",
  "level": 3
}, {
  "value": "<strong><strong>客户端解析与验证</strong></strong>",
  "id": "客户端解析与验证",
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
        id: "id-token的使用场景与使用方法",
        children: "ID Token的使用场景与使用方法"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ID Token是OIDC（", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://openid.net/specs/openid-connect-core-1_0.html",
        children: "OpenID Connect"
      }), "）协议相对于OAuth 2.0协议扩展的一个用户身份凭证。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ID Token 是 JWT Token格式，意味着："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户的身份信息直接被编码进了ID Token，不需要额外请求其他的资源来获取用户信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ID Token 可以验证其是华为账号服务颁发的，携带华为账号签名信息，验证签名可证明其没有被篡改过。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用无服务器，只有客户端，该场景下无法使用Authorization Code完成服务器侧的接口调用获取用户信息，需从ID Token中解析出用户信息；"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用有服务器，希望在服务器侧解析ID Token对应字段，获取用户信息。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "字段说明",
      children: "字段说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ID Token是JWT Token格式数据，其中payload包含字段如下："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否默认返回"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iss"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["固定值：\"", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://accounts.huawei.com\""
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["即用户的UnionID。同一个开发者下的所有应用，此参数均相同。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aud"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收ID Token的Client ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID Token的过期时间戳（10位）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "iat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ID Token的生成时间戳（10位）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "at_hash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access Token的哈希值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "azp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "生成ID Token的Client ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户OpenID。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/account-kit-guide/account-faq/account-faq-9",
              children: "OpenID和UnionID的格式说明"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nonce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["防重放攻击随机值。详情请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#loginwithhuaweiidrequest",
              children: "LoginWithHuaweiIDRequest"
            }), "或", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "的nonce字段说明。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "picture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["用户头像图片链接。该字段返回场景：", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "中的scopes包含profile。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "display_name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为账号对应的昵称，没有昵称则取匿名化的邮箱或手机号。该字段返回场景：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "中的scopes包含profile。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "nickname"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["华为账号对应的昵称。该字段返回场景：  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/account-api/account-api-arkts/account-api-authentication/account-api-authentication#authorizationwithhuaweiidrequest",
              children: "AuthorizationWithHuaweiIDRequest"
            }), "中的scopes包含profile。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "解析与验证",
      children: "解析与验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "服务端解析与验证",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "服务端解析与验证"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用场景：有服务器应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于有应用服务端的应用，推荐在服务端进行ID Token解析与验证，具体参考以下Maven工程依赖配置及Java示例代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maven工程依赖："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<dependencies>\n    <dependency>\n        <groupId>com.alibaba.fastjson2</groupId>\n        <artifactId>fastjson2</artifactId>\n        <version>2.0.51</version> <!--此处替换为您项目需要的版本-->\n    </dependency>\n    <dependency>\n        <groupId>org.bouncycastle</groupId>\n        <artifactId>bcprov-jdk18on</artifactId>\n        <version>1.74</version> <!--此处替换为您项目需要的版本-->\n    </dependency>\n    <dependency>\n        <groupId>org.apache.httpcomponents</groupId>\n        <artifactId>httpclient</artifactId>\n        <version>4.5.6</version> <!--此处替换为您项目需要的版本-->\n    </dependency>\n    <dependency>\n        <groupId>com.auth0</groupId>\n        <artifactId>jwks-rsa</artifactId>\n        <version>0.8.2</version> <!--此处替换为您项目需要的版本-->\n    </dependency>\n    <dependency>\n        <groupId>com.auth0</groupId>\n        <artifactId>java-jwt</artifactId>\n        <version>3.8.1</version> <!--此处替换为您项目需要的版本-->\n    </dependency>\n</dependencies>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java代码示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import com.alibaba.fastjson2.JSONArray;\nimport com.alibaba.fastjson2.JSONObject;\nimport com.auth0.jwk.InvalidPublicKeyException;\nimport com.auth0.jwk.Jwk;\nimport com.auth0.jwt.JWT;\nimport com.auth0.jwt.JWTVerifier;\nimport com.auth0.jwt.algorithms.Algorithm;\nimport com.auth0.jwt.exceptions.JWTDecodeException;\nimport com.auth0.jwt.exceptions.JWTVerificationException;\nimport com.auth0.jwt.exceptions.TokenExpiredException;\nimport com.auth0.jwt.interfaces.DecodedJWT;\nimport org.apache.commons.codec.binary.Base64;\nimport org.apache.http.HttpEntity;\nimport org.apache.http.client.config.RequestConfig;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpGet;\nimport org.apache.http.impl.client.CloseableHttpClient;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.util.EntityUtils;\nimport org.bouncycastle.jce.provider.BouncyCastleProvider;\nimport java.nio.charset.StandardCharsets;\nimport java.security.GeneralSecurityException;\nimport java.security.Security;\nimport java.security.Signature;\nimport java.security.interfaces.RSAPublicKey;\nimport java.util.ArrayList;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.Map;\npublic class IDTokenParser {\n    // 请替换为您的Client ID\n    private final static String CLIENT_ID = \"123456\";\n    private final static int MAX_PUBLIC_KEY_SIZE = 4;\n    // 缓存jwt公钥信息\n    private final Map<String, RSAPublicKey> keyId2PublicKey = new HashMap<>();\n    /**\n     * JWK JSON Web Key端点，开发者可以从该端点获取最近两天的JWK\n     * 公钥在24小时内更新。确保以下ID Token在24小时内生成\n     */\n    private static final String CERT_URL = \"https://oauth-login.cloud.huawei.com/oauth2/v3/certs\";\n    // ID Token的issuer\n    public static final String ID_TOKEN_ISSUE = \"https://accounts.huawei.com\";\n    public static final String ALG_RS256 = \"RS256\";\n    public final static String ALG_PS256 = \"PS256\";\n    public static void main(String[] args) throws Exception {\n        // 由上述CLIENT_ID对应值生成的ID Token\n        String idToken = \"<ID Token>\";\n        IDTokenParser idTokenParser = new IDTokenParser();\n        JSONObject idTokenInfo = idTokenParser.verifyAndParse(idToken);\n        // 解析获取ID Token中的数据，例：解析获取iss\n        String iss = idTokenInfo.getString(\"iss\");\n    }\n    /**\n     * 验证并解析ID Token\n     * @param idToken idToken\n     * @return ID Token携带的信息\n     * @throws Exception 异常\n     */\n    public JSONObject verifyAndParse(String idToken) throws Exception {\n        try {\n            DecodedJWT decoder = JWT.decode(idToken);\n            if (!decoder.getIssuer().equals(ID_TOKEN_ISSUE)) {\n                // issuer校验不通过，抛出异常（异常类型可自行选择）\n                throw new RuntimeException(\"issuer no match\");\n            }\n            if (decoder.getAudience().size() > 0) {\n                if (!decoder.getAudience().get(0).equals(CLIENT_ID)) {\n                    // audience校验不通过，抛出异常（异常类型可自行选择）\n                    throw new RuntimeException(\"audience no match\");\n                }\n            }\n            // 获取ID Token签名使用的算法\n            String alg = decoder.getAlgorithm();\n            if (ALG_RS256.equals(alg)) {\n                Algorithm algorithm = Algorithm.RSA256(getRSAPublicKeyByKid(decoder.getKeyId()), null);\n                JWTVerifier verifier = JWT.require(algorithm).build();\n                JSONObject jsonObject = JSONObject.parseObject(new String(Base64.decodeBase64(decoder.getPayload())));\n                // 验证签名\n                verifier.verify(decoder);\n                jsonObject.put(\"alg\", decoder.getAlgorithm());\n                jsonObject.put(\"typ\", decoder.getType());\n                jsonObject.put(\"kid\", decoder.getKeyId());\n                return jsonObject;\n            } else if (ALG_PS256.equals(alg)) {\n                PS256Algorithm algorithm = new PS256Algorithm(getRSAPublicKeyByKid(decoder.getKeyId()));\n                boolean verifyResult = algorithm.verify(decoder.getHeader(), decoder.getPayload(),\n                    decoder.getSignature());\n                if (verifyResult) {\n                    JSONObject jsonObject = JSONObject.parseObject(\n                        new String(Base64.decodeBase64(decoder.getPayload())));\n                    jsonObject.put(\"alg\", decoder.getAlgorithm());\n                    jsonObject.put(\"typ\", decoder.getType());\n                    jsonObject.put(\"kid\", decoder.getKeyId());\n                    return jsonObject;\n                }\n            }\n            return null;\n        } catch (JWTDecodeException e) {\n            // ID Token解析失败，此场景常见于ID Token格式不正确\n            throw new RuntimeException(\"ID Token decode failed\");\n        } catch (TokenExpiredException e) {\n            // ID Token已过期\n            throw new RuntimeException(\"ID Token expired\");\n        }\n    }\n    /**\n     * 通过kid获取公钥信息，请缓存公钥信息，示例中采用map方式进行缓存，开发者可选择其它合适的方式进行缓存\n     * @param keyId  keyId\n     * @return 公钥信息\n     * @throws InvalidPublicKeyException 异常\n     */\n    private RSAPublicKey getRSAPublicKeyByKid(String keyId) throws InvalidPublicKeyException {\n        if (keyId2PublicKey.get(keyId) != null) {\n            return keyId2PublicKey.get(keyId);\n        }\n        JSONArray keys = getJwks();\n        if (keys == null) {\n            return null;\n        }\n        if (keyId2PublicKey.size() > MAX_PUBLIC_KEY_SIZE) {\n            keyId2PublicKey.clear();\n        }\n        for (int i = 0; i < keys.size(); i++) {\n            String kid = keys.getJSONObject(i).getString(\"kid\");\n            String alg = keys.getJSONObject(i).getString(\"alg\");\n            if (ALG_RS256.equals(alg) || ALG_PS256.equals(alg)) {\n                keyId2PublicKey.put(kid, getRsaPublicKeyByJwk(keys.getJSONObject(i)));\n            }\n        }\n        return keyId2PublicKey.get(keyId);\n    }\n    /**\n     * 从https://oauth-login.cloud.huawei.com/oauth2/v3/certs获取jwt公钥信息jwk\n     * 因为jwk每天都会更新，所以需要缓存jwk\n     * @return JSONObject 公钥信息数组\n     */\n    private static JSONArray getJwks() {\n        CloseableHttpClient httpClient = HttpClients.createDefault();\n        HttpGet httpGet = new HttpGet(CERT_URL);\n        RequestConfig requestConfig = RequestConfig.custom()\n            .setConnectTimeout(5000)\n            .setConnectionRequestTimeout(5000)\n            .setSocketTimeout(5000)\n            .build();\n        httpGet.setConfig(requestConfig);\n        try {\n            CloseableHttpResponse response = httpClient.execute(httpGet);\n            HttpEntity entity = response.getEntity();\n            String result = EntityUtils.toString(entity);\n            return JSONObject.parseObject(result).getJSONArray(\"keys\");\n        } catch (Exception e) {\n            return null;\n        } finally {\n            if (null != httpClient) {\n                try {\n                    httpClient.close();\n                } catch (Exception e) {\n                    e.printStackTrace();\n                }\n            }\n        }\n    }\n    /**\n     * 通过jwk获取公钥信息\n     * @return RSAPublicKey 公钥信息\n     */\n    private static RSAPublicKey getRsaPublicKeyByJwk(JSONObject jwkObject) throws InvalidPublicKeyException {\n        Map<String, Object> additionalAttributes = new HashMap<>();\n        additionalAttributes.put(\"n\", jwkObject.getString(\"n\"));\n        additionalAttributes.put(\"e\", jwkObject.getString(\"e\"));\n        List<String> operations = new ArrayList<>();\n        Jwk jwk = new Jwk(jwkObject.getString(\"kid\"), jwkObject.getString(\"kty\"), jwkObject.getString(\"alg\"),\n            jwkObject.getString(\"use\"), operations, null, null, null, additionalAttributes);\n        return (RSAPublicKey) jwk.getPublicKey();\n    }\n    static class PS256Algorithm {\n        private final RSAPublicKey publicKey;\n        public PS256Algorithm(RSAPublicKey publicKey) {\n            this.publicKey = publicKey;\n        }\n        public boolean verify(String header, String payload, String signature) throws JWTVerificationException {\n            byte[] contentBytes = (header + '.' + payload).getBytes(StandardCharsets.UTF_8);\n            byte[] signatureBytes = Base64.decodeBase64(signature);\n            try {\n                Security.addProvider(new BouncyCastleProvider());\n                Signature sign = Signature.getInstance(\"SHA256WithRSA/PSS\");\n                sign.initVerify(publicKey);\n                sign.update(contentBytes);\n                return sign.verify(signatureBytes);\n            } catch (GeneralSecurityException e) {\n                throw new JWTVerificationException(\"JWT verify failed\");\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "客户端解析与验证",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "客户端解析与验证"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用场景：无服务器应用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于无服务器应用，可在客户端获取ID Token后，进行本地解析与验证，解析后可获取用户数据，并验证签名，具体参考如下ArkTS代码示例，将获取的ID Token作为方法入参，并将代码中的CLIENT_ID替换为应用真实的Client ID："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { buffer } from '@kit.ArkTS';\nimport { cryptoFramework } from '@kit.CryptoArchitectureKit';\nimport { http } from '@kit.NetworkKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\ndecodeBase64(data: string): string {\n  return buffer.from(data, 'base64').toString('utf8');\n}\n// 解析ID Token并验证\ndecodeIdToken(idToken: string): void {\n  const parts = idToken.split('.');\n  if (parts.length !== 3) {\n    return;\n  }\n  const idTokenObj: Record<string, Object> = {};\n  // ID Token头部\n  idTokenObj['header'] = JSON.parse(this.decodeBase64(parts[0]));\n  // ID Token负载\n  idTokenObj['payload'] = JSON.parse(this.decodeBase64(parts[1]));\n  // ID Token签名\n  idTokenObj['signature'] = parts[2];\n  const header: Record<string, string> = idTokenObj['header'] as Record<string, string>;\n  // 从负载中解析出nonce等数据\n  const payLoad: Record<string, string> = idTokenObj['payload'] as Record<string, string>;\n  const nonce: string = payLoad['nonce'];\n  // 应用Client ID，使用前请替换\n  const CLIENT_ID: string = '<应用Client ID>';\n  const ID_TOKEN_ISSUE: string = 'https://accounts.huawei.com';\n  const iss: string = payLoad['iss'];\n  const aud: string = payLoad['aud'];\n  if(iss !== ID_TOKEN_ISSUE){\n    // 验证失败，开发者处理失败场景\n    hilog.error(0x0000, 'testTag', 'Failed to check iss');\n    return;\n  }\n  if(aud !== CLIENT_ID){\n    // 验证失败，开发者处理失败场景\n    hilog.error(0x0000, 'testTag', 'Failed to check aud');\n    return;\n  }\n  // 验证签名\n  this.checkSignature(idToken, header['kid'], header['alg']);\n}\n\nprivate stringToUint8Array(str: string): Uint8Array {\n  const arr: number[] = [];\n  for (let i = 0, j = str.length; i < j; ++i) {\n    arr.push(str.charCodeAt(i));\n  }\n  const tmpUint8Array: Uint8Array = new Uint8Array(arr);\n  return tmpUint8Array;\n}\n// 验签方法\nprivate checkSignature(idToken: string, kid: string, alg: string) {\n  if (!idToken) {\n    return;\n  }\n  const parts = idToken.split('.');\n  if (parts.length !== 3) {\n    return;\n  }\n  const url = 'https://oauth-login.cloud.huawei.com/oauth2/v3/certs';\n  // 创建http请求，应用需在module.json5文件中先申请“ohos.permission.INTERNET”网络权限，请求才能发送成功\n  const httpRequest = http.createHttp();\n  httpRequest.request(url, (err, data) => {\n    if (err) {\n      hilog.error(0x0000, 'testTag', `Failed to httpRequest. Code: ${err.code}, message: ${err.message}`);\n      httpRequest.destroy();\n      return;\n    }\n    let nStr = '';\n    let eStr = '';\n    const keys: object[] = JSON.parse(data.result as string)[\"keys\"];\n    for (let item of keys) {\n      if (kid === item['kid']) {\n        nStr = item['n'];\n        eStr = item['e'];\n        break;\n      }\n    }\n    const nBigInt = '0x' + buffer.from(nStr, \"base64url\").toString('hex');\n    const eBigInt = '0x' + buffer.from(eStr, \"base64url\").toString('hex');\n    const dsaCommonSpec: cryptoFramework.RSACommonParamsSpec = {\n      algName: \"RSA\",\n      specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC,\n      n: BigInt(nBigInt),\n    }\n    const rsaKeyPairSpec: cryptoFramework.RSAPubKeySpec = {\n      algName: \"RSA\",\n      specType: cryptoFramework.AsyKeySpecType.PUBLIC_KEY_SPEC,\n      params: dsaCommonSpec,\n      pk: BigInt(eBigInt),\n    }\n    const asyKeyGeneratorBySpec = cryptoFramework.createAsyKeyGeneratorBySpec(rsaKeyPairSpec);\n    asyKeyGeneratorBySpec.generatePubKey(async (error, publicKey) => {\n      if (error) {\n        return;\n      }\n      if (publicKey === null) {\n        return;\n      }\n      const idTokenSign = parts[2];\n      const idTokenSignArr: cryptoFramework.DataBlob = { data: new Uint8Array(buffer.from(idTokenSign, \"base64url\").buffer) };\n      const idToken = parts[0] + '.' + parts[1];\n      const idTokenArr: cryptoFramework.DataBlob = { data: this.stringToUint8Array(idToken) };\n      const verifier = alg === 'PS256' ? cryptoFramework.createVerify(\"RSA2048|PSS|SHA256|MGF1_SHA256\")\n        : cryptoFramework.createVerify(\"RSA2048|PKCS1|SHA256\");\n      verifier.init(publicKey, (initErr, result) => {\n        verifier.verify(idTokenArr, idTokenSignArr, (verifyErr, data) => {\n          // 打印验签结果，结果为true则验签通过\n          hilog.info(0x0000, 'testTag', 'verify result is: %{public}s', data);\n        });\n      });\n    })\n    httpRequest.destroy();\n  });\n}\n"
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