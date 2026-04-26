"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["161294"], {
547194(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_account_kit_guide_subscribe_process_userinfo_change_subscribe_process_userinfo_change_md_cfc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-account-kit-guide-subscribe-process-userinfo-change-subscribe-process-userinfo-change-md-cfc.json
var site_docs_account_kit_guide_subscribe_process_userinfo_change_subscribe_process_userinfo_change_md_cfc_namespaceObject = JSON.parse('{"id":"account-kit-guide/subscribe-process-userinfo-change/subscribe-process-userinfo-change","title":"订阅和处理用户信息变更","description":"概述","source":"@site/docs/account-kit-guide/subscribe-process-userinfo-change/subscribe-process-userinfo-change.md","sourceDirName":"account-kit-guide/subscribe-process-userinfo-change","slug":"/account-kit-guide/subscribe-process-userinfo-change/","permalink":"/harmonyos-docs-site/account-kit-guide/subscribe-process-userinfo-change/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"订阅和处理用户信息变更","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/subscribe-process-userinfo-change","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用内调整未成年人模式设置","permalink":"/harmonyos-docs-site/account-kit-guide/account-minorsprotection/account-follow-minorsprotection/account-password-minorsprotection/"},"next":{"title":"1001500001 应用指纹证书校验失败的可能原因和解决办法","permalink":"/harmonyos-docs-site/account-kit-guide/account-faq/account-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/account-kit-guide/subscribe-process-userinfo-change/subscribe-process-userinfo-change.md


const frontMatter = {
	title: '订阅和处理用户信息变更',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/subscribe-process-userinfo-change',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '订阅和处理用户信息变更';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "用户信息变更事件介绍",
  "id": "用户信息变更事件介绍",
  "level": 2
}, {
  "value": "订阅用户信息变更",
  "id": "订阅用户信息变更",
  "level": 2
}, {
  "value": "处理通知消息",
  "id": "处理通知消息",
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
        id: "订阅和处理用户信息变更",
        children: "订阅和处理用户信息变更"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过订阅用户信息变更，您可以接收有关用户及其账户的重要更新。当用户及其账户信息发生变更时，华为账号服务器会发送通知到应用服务端，应用服务端可以根据通知消息进行自身业务处理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "用户信息变更事件介绍",
      children: "用户信息变更事件介绍"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "消息名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "事件类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "事件描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tokens-revoked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://schemas.openid.net/secevent/oauth/event-type/tokens-revoked"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户取消应用的授权"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "account-purged"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://schemas.openid.net/secevent/risc/event-type/account-purged"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户注销华为账号"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "phone-modified"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "https://schemas.openid.net/secevent/oauth/event-type/phone-modified"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户授权手机号变更"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "订阅用户信息变更",
      children: "订阅用户信息变更"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "订阅步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["登录", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://developer.huawei.com/consumer/cn/",
            children: "华为开发者联盟"
          }), "，选择“管理中心 > API服务 > API库”。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择项目，然后在API名称搜索框检索关键字“RISC”，找到RISC点击进入详情。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(843781)/* ["default"] */.A) + "",
            width: "1910",
            height: "898"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击启用按钮。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(864465)/* ["default"] */.A) + "",
            width: "1897",
            height: "895"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击订阅通知按钮，在弹窗中配置回调地址及订阅范围。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(721574)/* ["default"] */.A) + "",
            width: "1909",
            height: "893"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(130200)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "回调地址：在开启订阅通知后，若华为用户信息发生变更，会发送通知消息到该地址。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["订阅范围：订阅的用户信息变更事件，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "#%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%E5%8F%98%E6%9B%B4%E4%BA%8B%E4%BB%B6%E4%BB%8B%E7%BB%8D",
            children: "用户信息变更事件介绍"
          }), "。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "处理通知消息",
      children: "处理通知消息"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "华为账号服务器向开发者应用服务端投递消息。开发者应用服务端接收到消息后需要先对消息头中的令牌进行验签，确保消息的完整有效性后解析并获取用户信息变更事件详情。具体步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "验证消息头中的令牌签名。"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["您可通过任何JWT库（例如：", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://jwt.io/introduction/",
            children: "jwt.io"
          }), "）对其进行解析与验证。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "无论使用哪种库，您均需完成如下操作："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["调用接口（", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://risc.cloud.huawei.com/v1beta/public/risc/.well-known/risc-configuration），获取发行者标识（issuer）与签名密钥证书URI（jwks\\_uri）"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过依赖的JWT库，对消息头中的令牌进行解析，获取签名的KeyId。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "通过签名的KeyId，从签名密钥证书URI中获取到JWT签名的公钥。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["校验JWT签名中的aud与", (0,jsx_runtime.jsx)(_components.a, {
              href: "#%E8%AE%A2%E9%98%85%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%E5%8F%98%E6%9B%B4",
              children: "订阅用户信息变更"
            }), "中提供的Client ID一致。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "校验JWT签名中的issuer与发行者标识（issuer）一致。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "具体验签逻辑，请参考如下示例代码："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Maven依赖配置"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<dependencies>\n   <dependency>\n      <groupId>com.github.ben-manes.caffeine</groupId>\n      <artifactId>caffeine</artifactId>\n      <version>2.9.3</version> <!--此处替换为您项目需要的版本-->\n   </dependency>\n   <dependency>   \n      <groupId>com.auth0</groupId> \n      <artifactId>jwks-rsa</artifactId>\n      <version>0.21.2</version> <!--此处替换为您项目需要的版本-->\n   </dependency>\n   <dependency>\n      <groupId>io.jsonwebtoken</groupId>\n      <artifactId>jjwt-impl</artifactId>\n      <version>0.11.5</version> <!--此处替换为您项目需要的版本-->\n   </dependency>\n   <dependency>\n      <groupId>io.jsonwebtoken</groupId>\n      <artifactId>jjwt-jackson</artifactId>\n      <version>0.11.5</version> <!--此处替换为您项目需要的版本-->\n   </dependency>\n   <dependency>\n      <groupId>com.alibaba.fastjson2</groupId>\n      <artifactId>fastjson2</artifactId>\n      <version>2.0.51</version> <!--此处替换为您项目需要的版本-->\n   </dependency>\n   <dependency>\n      <groupId>org.apache.httpcomponents</groupId>\n      <artifactId>httpclient</artifactId>\n      <version>4.5.6</version> <!--此处替换为您项目需要的版本-->\n   </dependency>\n   <dependency>\n      <groupId>org.projectlombok</groupId>\n      <artifactId>lombok</artifactId>\n      <version>1.18.26</version> <!--此处替换为您项目需要的版本-->\n   </dependency>\n   <dependency>\n      <groupId>ch.qos.logback</groupId>\n      <artifactId>logback-classic</artifactId>\n      <version>1.2.11</version> <!--此处替换为您项目需要的版本-->\n   </dependency>\n</dependencies>\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Java验签代码示例"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import com.alibaba.fastjson2.JSON;\nimport com.alibaba.fastjson2.JSONObject;\nimport com.auth0.jwk.JwkProvider;\nimport com.auth0.jwk.UrlJwkProvider;\nimport com.github.benmanes.caffeine.cache.CacheLoader;\nimport com.github.benmanes.caffeine.cache.Caffeine;\nimport com.github.benmanes.caffeine.cache.LoadingCache;\nimport io.jsonwebtoken.Claims;\nimport io.jsonwebtoken.IncorrectClaimException;\nimport io.jsonwebtoken.JwsHeader;\nimport io.jsonwebtoken.Jwt;\nimport io.jsonwebtoken.JwtParser;\nimport io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.SigningKeyResolver;\nimport io.jsonwebtoken.security.SignatureException;\nimport lombok.Data;\nimport lombok.extern.slf4j.Slf4j;\nimport org.apache.http.HttpEntity;\nimport org.apache.http.HttpStatus;\nimport org.apache.http.client.config.RequestConfig;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpGet;\nimport org.apache.http.config.Registry;\nimport org.apache.http.config.RegistryBuilder;\nimport org.apache.http.conn.socket.ConnectionSocketFactory;\nimport org.apache.http.conn.socket.PlainConnectionSocketFactory;\nimport org.apache.http.conn.ssl.SSLConnectionSocketFactory;\nimport org.apache.http.impl.client.CloseableHttpClient;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.impl.conn.PoolingHttpClientConnectionManager;\nimport org.apache.http.util.EntityUtils;\nimport org.checkerframework.checker.nullness.qual.NonNull;\nimport org.checkerframework.checker.nullness.qual.Nullable;\nimport javax.net.ssl.SSLContext;\nimport javax.net.ssl.TrustManagerFactory;\nimport java.io.IOException;\nimport java.net.URL;\nimport java.security.Key;\nimport java.security.KeyManagementException;\nimport java.security.KeyStore;\nimport java.security.KeyStoreException;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.PublicKey;\nimport java.util.Objects;\nimport java.util.concurrent.TimeUnit;\n\n/**\n * 订阅和处理用户信息变更\n */\n@Slf4j\npublic class RiscDemo {\n    /**\n     * 公开配置信息地址\n     */\n    private static final String PUBLIC_CONFIGURATION_URL = \"https://risc.cloud.huawei.com/v1beta/public/risc/.well-known/risc-configuration\";\n\n    /**\n     * 公开信息缓存\n     */\n    private final LoadingCache<String, PublicConfiguration> publicConfigurationCache = Caffeine.newBuilder()\n            .expireAfterWrite(1, TimeUnit.DAYS)\n            .build(key -> {\n                HttpGet request = new HttpGet(PUBLIC_CONFIGURATION_URL);\n                try (CloseableHttpResponse response = getClient().execute(request)) {\n                    HttpEntity responseEntity = response.getEntity();\n                    String ret = responseEntity != null ? EntityUtils.toString(responseEntity) : null;\n                    EntityUtils.consume(responseEntity);\n                    int statusCode = response.getStatusLine().getStatusCode();\n                    // http状态码不是200，抛出异常\n                    if (statusCode != HttpStatus.SC_OK) {\n                        throw new IOException(\"call failed! http status code: \" + statusCode + \", response data: \" + ret);\n                    }\n                    JSONObject configJson = (JSONObject) JSON.parse(ret);\n                    if (configJson == null) {\n                        throw new IllegalArgumentException(\"response param error! http status code: \" + statusCode + \", response data: \" + ret);\n                    }\n                    String issuer = configJson.getString(\"issuer\");\n                    String jwksUri = configJson.getString(\"jwks_uri\");\n                    if (Objects.isNull(issuer) || Objects.isNull(jwksUri)) {\n                        throw new IllegalArgumentException(\"response param error! http status code: \" + statusCode + \", response data: \" + ret);\n                    }\n                    PublicConfiguration publicConfiguration = new PublicConfiguration();\n                    publicConfiguration.setIssuer(issuer);\n                    publicConfiguration.setJwksUri(jwksUri);\n                    return publicConfiguration;\n                }\n            });\n\n    /**\n     * 公钥信息缓存\n     */\n    private final LoadingCache<String, PublicKey> publicKeyCache = Caffeine.newBuilder()\n            .expireAfterWrite(1, TimeUnit.DAYS)\n            .build(new CacheLoader<String, PublicKey>() {\n                @Override\n                public @Nullable PublicKey load(@NonNull String key) throws Exception {\n                    PublicConfiguration publicConfiguration = getPublicConfiguration();\n                    JwkProvider huaweiCerts = new UrlJwkProvider(new URL(publicConfiguration.getJwksUri()), null, null);\n                    return huaweiCerts.get(key).getPublicKey();\n                }\n            });\n\n    /**\n     * 调试方法入口\n     * @param args main方法入参\n     */\n    public static void main(String[] args) {\n        // 消息请求头中Authorization: Bearer <token>中的<token>\n        String token = \"<token>\";\n        // Client ID\n        String clientId = \"<Client ID>\";\n        Jwt<?, ?> jwt = new RiscDemo().validateSecurityEventToken(token, clientId);\n        if (Objects.isNull(jwt)) {\n            // 验签失败\n            log.error(\"verify sign failed\");\n        } else {\n            // 验签成功\n            log.info(\"verify sign success\");\n        }\n    }\n\n    /**\n     * 对Authorization头域中的token进行验签\n     *\n     * @param token    消息请求头中Authorization: Bearer <token>中的<token>\n     * @param clientId clientId\n     * @return 返回为null，则表示验签失败，否则表示验证成功\n     */\n    public Jwt<?, ?> validateSecurityEventToken(String token, String clientId) {\n        try {\n            // 公开配置信息中的issuer值\n            String issuer = getPublicConfiguration().getIssuer();\n            SigningKeyResolver signingKeyResolver = new SigningKeyResolver() {\n                private PublicKey getPublicKey(JwsHeader<?> jwsHeader) {\n                    try {\n                        return publicKeyCache.get(jwsHeader.getKeyId());\n                    } catch (Exception e) {\n                        throw new RuntimeException(e);\n                    }\n                }\n                @Override\n                public Key resolveSigningKey(JwsHeader jwsHeader, Claims claims) {\n                    return getPublicKey(jwsHeader);\n                }\n                @Override\n                public Key resolveSigningKey(JwsHeader jwsHeader, String s) {\n                    return getPublicKey(jwsHeader);\n                }\n            };\n            // 验证并解析消息内容\n            JwtParser parser = Jwts.parserBuilder()\n                    .requireIssuer(issuer)\n                    .requireAudience(clientId)\n                    .setAllowedClockSkewSeconds(60)\n                    .setSigningKeyResolver(signingKeyResolver)\n                    .build();\n            return parser.parse(token);\n        } catch (IncorrectClaimException e) {\n            // 消息的claim无效，针对异常进行处理（如：日志记录）\n            log.error(\"claim invalid\", e);\n        } catch (SignatureException e) {\n            // 验签失败，针对异常进行处理（如：日志记录）\n            log.error(\"verify signature failed\", e);\n        } catch (Exception e) {\n            // 其他异常，业务自行处理\n            log.error(\"valid event token failed\", e);\n        }\n        return null;\n    }\n\n    private PublicConfiguration getPublicConfiguration() {\n        PublicConfiguration publicConfiguration = this.publicConfigurationCache.get(\"DEFAULT\");\n        if (publicConfiguration == null) {\n            throw new IllegalArgumentException(\"public configuration get failed!\");\n        }\n        return publicConfiguration;\n    }\n\n    private static CloseableHttpClient getClient() {\n        PoolingHttpClientConnectionManager connectionManager = buildConnectionManager(\n                new String[] {\"TLSv1.2\"}, new String[] {\n                        \"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\", \"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256\",\n                        \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\", \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\"\n                });\n        connectionManager.setMaxTotal(400);\n        connectionManager.setDefaultMaxPerRoute(400);\n        RequestConfig config = RequestConfig.custom()\n                .setConnectionRequestTimeout(100)\n                .setRedirectsEnabled(false)\n                .build();\n        return HttpClients.custom()\n                .useSystemProperties()\n                .setConnectionManager(connectionManager)\n                .setDefaultRequestConfig(config)\n                .build();\n    }\n\n    private static PoolingHttpClientConnectionManager buildConnectionManager(String[] supportedProtocols,\n                                                                             String[] supportedCipherSuites) {\n        PoolingHttpClientConnectionManager connectionManager = null;\n        try {\n            SSLContext sc = SSLContext.getInstance(\"TLSv1.2\");\n            TrustManagerFactory tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());\n            tmf.init((KeyStore) null);\n            sc.init(null, tmf.getTrustManagers(), null);\n            SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sc, supportedProtocols,\n                    supportedCipherSuites, SSLConnectionSocketFactory.getDefaultHostnameVerifier());\n            Registry<ConnectionSocketFactory> registry = RegistryBuilder.<ConnectionSocketFactory>create()\n                    .register(\"http\", new PlainConnectionSocketFactory())\n                    .register(\"https\", sslsf)\n                    .build();\n            connectionManager = new PoolingHttpClientConnectionManager(registry);\n        } catch (NoSuchAlgorithmException | KeyStoreException | KeyManagementException e) {\n            log.error(\"build connect manager failed\", e);\n        }\n        return connectionManager;\n    }\n\n    @Data\n    static class PublicConfiguration {\n        private String issuer;\n        private String jwksUri;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "处理消息体。"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "JSON对象格式消息体"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "消息示例：用户注销华为账号"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"iss\": \"id.cloud.huawei.com\",\n  \"aud\": \"<Client ID>\",\n  \"iat\": 1727619834,\n  \"jti\": \"6672ed7d5c5e4c3c92f343ecac40f326\",\n  \"events\": {\n    \"https://schemas.openid.net/secevent/risc/event-type/account-purged\": {\n      \"subject\": {\n        \"extra\": \"<触发事件用户的OpenID>\",\n        \"iss\": \"id.cloud.huawei.com\",\n        \"sub\": \"<触发事件用户的UnionID>\",\n        \"subject_type\": \"iss_sub\"\n      }\n    }\n  }\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "消息示例：用户取消应用的授权"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"iss\": \"id.cloud.huawei.com\",\n  \"aud\": \"<Client ID>\",\n  \"iat\": 1750403661,\n  \"jti\": \"97af1abdbbcd4f00a6d8b74c9b1bbb56\",\n  \"events\": {\n    \"https://schemas.openid.net/secevent/oauth/event-type/tokens-revoked\": {\n      \"subject\": {\n        \"extra\": \"<触发事件用户的OpenID>\",\n        \"iss\": \"id.cloud.huawei.com\",\n        \"sub\": \"<触发事件用户的UnionID>\",\n        \"subject_type\": \"iss_sub\"\n      },\n      \"scopes\": [\n        \"phone\",\n        \"userConsent\",\n        \"openid\",\n        \"email\"\n      ]\n    }\n  }\n}\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "消息示例：用户授权手机号变更"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "{\n  \"iss\": \"id.cloud.huawei.com\",\n  \"aud\": \"<Client ID>\",\n  \"iat\": 1750385669,\n  \"jti\": \"c27c197ba5c94081aa32b8dbc52389f3\",\n  \"events\": {\n    \"https://schemas.openid.net/secevent/oauth/event-type/phone-modified\": {\n      \"subject\": {\n        \"extra\": \"<触发事件用户的OpenID>\",\n        \"iss\": \"id.cloud.huawei.com\",\n        \"sub\": \"<触发事件用户的UnionID>\",\n        \"subject_type\": \"iss_sub\"\n      }\n    }\n  }\n}\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "JSON数组格式消息体"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "消息示例：用户注销华为账号"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[\n  {\n    \"iss\": \"id.cloud.huawei.com\",\n    \"aud\": \"<Client ID>\",\n    \"iat\": 1750385669,\n    \"jti\": \"6672ed7d5c5e4c3c92f343ecac40f326\",\n    \"events\": {\n      \"https://schemas.openid.net/secevent/risc/event-type/account-purged\": {\n        \"subject\": {\n          \"extra\": \"<触发事件用户的OpenID>\",\n          \"iss\": \"id.cloud.huawei.com\",\n          \"sub\": \"<触发事件用户的UnionID>\",\n          \"subject_type\": \"iss_sub\"\n        }\n      }\n    }\n  },\n  {\n    \"iss\": \"id.cloud.huawei.com\",\n    \"aud\": \"<Client ID>\",\n    \"iat\": 1750385669,\n    \"jti\": \"6672ed7d5c5e4c3c92f343ecac40f325\",\n    \"events\": {\n      \"https://schemas.openid.net/secevent/risc/event-type/account-purged\": {\n        \"subject\": {\n          \"extra\": \"<触发事件用户的OpenID>\",\n          \"iss\": \"id.cloud.huawei.com\",\n          \"sub\": \"<触发事件用户的UnionID>\",\n          \"subject_type\": \"iss_sub\"\n        }\n      }\n    }\n  }\n]\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "消息示例：用户取消应用的授权"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[\n  {\n    \"iss\": \"id.cloud.huawei.com\",\n    \"aud\": \"<Client ID>\",\n    \"iat\": 1750403661,\n    \"jti\": \"97af1abdbbcd4f00a6d8b74c9b1bbb56\",\n    \"events\": {\n      \"https://schemas.openid.net/secevent/oauth/event-type/tokens-revoked\": {\n        \"subject\": {\n          \"extra\": \"<触发事件用户的OpenID>\",\n          \"iss\": \"id.cloud.huawei.com\",\n          \"sub\": \"<触发事件用户的UnionID>\",\n          \"subject_type\": \"iss_sub\"\n        },\n        \"scopes\": [\n          \"phone\",\n          \"userConsent\",\n          \"openid\",\n          \"email\"\n        ]\n      }\n    }\n  },\n  {\n    \"iss\": \"id.cloud.huawei.com\",\n    \"aud\": \"<Client ID>\",\n    \"iat\": 1750403661,\n    \"jti\": \"97af1abdbbcd4f00a6d8b74c9b1bbb57\",\n    \"events\": {\n      \"https://schemas.openid.net/secevent/oauth/event-type/tokens-revoked\": {\n        \"subject\": {\n          \"extra\": \"<触发事件用户的OpenID>\",\n          \"iss\": \"id.cloud.huawei.com\",\n          \"sub\": \"<触发事件用户的UnionID>\",\n          \"subject_type\": \"iss_sub\"\n        },\n        \"scopes\": [\n          \"phone\",\n          \"userConsent\",\n          \"openid\",\n          \"email\"\n        ]\n      }\n    }\n  }\n]\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "消息示例：用户授权手机号变更"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[\n  {\n    \"iss\": \"id.cloud.huawei.com\",\n    \"aud\": \"<Client ID>\",\n    \"iat\": 1750385669,\n    \"jti\": \"c27c197ba5c94081aa32b8dbc52389f3\",\n    \"events\": {\n      \"https://schemas.openid.net/secevent/oauth/event-type/phone-modified\": {\n        \"subject\": {\n          \"extra\": \"<触发事件用户的OpenID>\",\n          \"iss\": \"id.cloud.huawei.com\",\n          \"sub\": \"<触发事件用户的UnionID>\",\n          \"subject_type\": \"iss_sub\"\n        }\n      }\n    }\n  },\n  {\n    \"iss\": \"id.cloud.huawei.com\",\n    \"aud\": \"<Client ID>\",\n    \"iat\": 1750385669,\n    \"jti\": \"c27c197ba5c94081aa32b8dbc52389f4\",\n    \"events\": {\n      \"https://schemas.openid.net/secevent/oauth/event-type/phone-modified\": {\n        \"subject\": {\n          \"extra\": \"<触发事件用户的OpenID>\",\n          \"iss\": \"id.cloud.huawei.com\",\n          \"sub\": \"<触发事件用户的UnionID>\",\n          \"subject_type\": \"iss_sub\"\n        }\n      }\n    }\n  }\n]\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其中，各字段含义如下："
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "描述"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "aud"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["Client ID（与", (0,jsx_runtime.jsx)(_components.a, {
                  href: "#%E8%AE%A2%E9%98%85%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%E5%8F%98%E6%9B%B4",
                  children: "订阅用户信息变更"
                }), "中提供的Client ID一致）。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "iss"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "消息投递者标识，固定值“id.cloud.huawei.com”。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "iat"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "生成该事件的UTC时间戳（秒级）。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "jti"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "唯一随机字符串，用于标识此消息体，开发者可根据此字段来识别重投消息体。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "events"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "用户信息变更事件与事件消息体，格式为json。key是用户信息变更事件类型，value为其对应事件消息信息。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "subject"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["用户信息变更事件对应的消息体，格式为json，包含字段说明如下：  - sub：触发事件用户的UnionID（用户在同一个开发者下的所有应用中，此值唯一）。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/account-kit-guide/account-faq/account-faq-9",
                  children: "OpenID和UnionID的格式说明"
                }), "。  - subject_type：固定为“iss_sub”。  - extra：触发事件用户的OpenID（用户在同一个应用中，此值唯一）。具体格式要求请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "/account-kit-guide/account-faq/account-faq-9",
                  children: "OpenID和UnionID的格式说明"
                }), "。  - iss：标识消息投递者，固定为“id.cloud.huawei.com”。"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "scopes"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["取消授权的scope列表，格式为json数组。在事件类型为【", (0,jsx_runtime.jsx)(_components.code, {
                  children: "https://schemas.openid.net/secevent/oauth/event-type/tokens-revoked】时才存在此字段"
                }), "。"]
              })]
            })]
          })]
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
843781(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438807-8d16bd1a013cfa86dc2914e83c84f220.png");

},
864465(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958762-b4d0655453d8a2862c161d2859c13002.png");

},
721574(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478763-c99c470b45b5511d2a3a2c0229e1f104.png");

},
130200(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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