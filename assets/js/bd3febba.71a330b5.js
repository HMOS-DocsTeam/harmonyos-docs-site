"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["705413"], {
595(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_iap_api_iap_rest_iap_verifying_signature_iap_verifying_signature_md_bd3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-iap-api-iap-rest-iap-verifying-signature-iap-verifying-signature-md-bd3.json
var site_docs_ref_iap_api_iap_rest_iap_verifying_signature_iap_verifying_signature_md_bd3_namespaceObject = JSON.parse('{"id":"iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature","title":"对返回结果验签","description":"功能介绍","source":"@site/docs-ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature.md","sourceDirName":"iap-api/iap-rest/iap-verifying-signature","slug":"/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"对返回结果验签","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-verifying-signature","kit":"应用服务","last_updated":"2026-04-22","slug":"iap-verifying-signature"},"sidebar":"ref","previous":{"title":"生成服务端请求的token","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-jwt-description/iap-jwt-description"},"next":{"title":"订单状态查询（消耗型/非消耗型/非续期订阅商品）","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-query-order-status/iap-query-order-status"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/iap-api/iap-rest/iap-verifying-signature/iap-verifying-signature.md


const frontMatter = {
	title: '对返回结果验签',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-verifying-signature',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'iap-verifying-signature'
};
const contentTitle = '对返回结果验签';

const assets = {

};



const toc = [{
  "value": "功能介绍",
  "id": "功能介绍",
  "level": 2
}, {
  "value": "JWS结构",
  "id": "jws结构",
  "level": 2
}, {
  "value": "JWS解码和验签",
  "id": "jws解码和验签",
  "level": 2
}, {
  "value": "JWS解码和验签示例",
  "id": "jws解码和验签示例",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "对返回结果验签",
        children: "对返回结果验签"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "功能介绍",
      children: "功能介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IAP服务器API返回结果以及服务端关键事件通知返回的是JSON Web Signature （JWS）格式的数据。JWS的主要目的是保证了数据在传输过程中不被修改，验证数据的完整性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "jws结构",
      children: "JWS结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWS由三部分组成："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Header（头部）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Payload（负载）"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Signature（签名）"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在传输的时候，将JWS的三部分分别进行Base64编码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "解码后的Header"
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
            children: "固定为JWT。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "x5c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X.509 证书链，顺序为叶子证书、中间证书、根证书。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "jws解码和验签",
      children: "JWS解码和验签"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析JWS，获取Header、 Payload和Signature。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从header的x5c中获取证书链（依次是叶子证书、中间证书、根证书），使用", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://pki.consumer.huawei.com/ca/cer/RootCaG2Ecdsa.cer",
          children: "Huawei CBG Root CA G2"
        }), "证书对证书链进行验证。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "校验叶子证书的OID：1.3.6.1.4.1.2011.2.415.1.1。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "证书校验通过则从叶子证书获取到PublicKey。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通过Header指定的算法和PublicKey进行JWT验签，可以使用各种开源库来验签，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://jwt.io/",
          children: "jwt.io"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "jws解码和验签示例",
      children: "JWS解码和验签示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(916434)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下示例代码仅以Java语言为例，Python、PHP、JS、Golang语言示例代码可通过在 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://gitcode.com/HarmonyOS_Samples/iapkit-sample-serverdemo",
            children: "IAP Kit-Sample-ServerDemo"
          })
        })
      }), " 中切换代码分支查看。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import com.auth0.jwt.JWT;\nimport com.auth0.jwt.JWTVerifier;\nimport com.auth0.jwt.algorithms.Algorithm;\nimport com.auth0.jwt.interfaces.DecodedJWT;\nimport java.io.ByteArrayInputStream;\nimport java.io.InputStream;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.security.PublicKey;\nimport java.security.cert.CertPath;\nimport java.security.cert.CertPathValidator;\nimport java.security.cert.CertPathValidatorException;\nimport java.security.cert.Certificate;\nimport java.security.cert.CertificateFactory;\nimport java.security.cert.PKIXCertPathValidatorResult;\nimport java.security.cert.PKIXParameters;\nimport java.security.cert.TrustAnchor;\nimport java.security.cert.X509Certificate;\nimport java.security.interfaces.ECPublicKey;\nimport java.util.Base64;\nimport java.util.HashSet;\nimport java.util.LinkedList;\nimport java.util.List;\nimport java.util.Set;\n\npublic class JWSChecker {\n    private static final String CA_CERT_FILE_PATH = \"/path/to/cer/RootCaG2Ecdsa.cer\";// TODO: Need to replace it with the actual value, please refer to Huawei CBG Root CA G2.\n\n    /**\n     * JWS HEADER PARAM X5C: Indicates the X.509 certificate chain. The sequence is leaf certificate, intermediate certificate, and root certificate.\n     */\n    private static final String HEADER_PARAM_X5C = \"x5c\";\n\n    private static final int X5C_CHAIN_LENGTH = 3;\n\n    /**\n     * JWS HEADER PARAM ALG: Algorithm type. The value is always ES256.\n     */\n    private static final String HEADER_PARAM_ALG_ES256 = \"ES256\";\n\n    private static final String LEAF_CERT_OID = \"1.3.6.1.4.1.2011.2.415.1.1\";\n\n    /**\n     * Used to verify JWS and decode the payload.\n     * @param jwsStr JWS string\n     * @return payload string\n     * @throws Exception exception\n     */\n    public static String checkAndDecodeJWS(String jwsStr) throws Exception {\n        if (jwsStr == null || jwsStr.isEmpty()) {\n            // TODO: Need to replace it with the actual business logic.\n            throw new Exception(\"jwsStr was null\");\n        }\n        DecodedJWT decodedJWT = JWT.decode(jwsStr);\n        if (!HEADER_PARAM_ALG_ES256.equals(decodedJWT.getAlgorithm())) {\n            // TODO: Need to replace it with the actual business logic.\n            throw new Exception(\"alg must be ES256\");\n        }\n        String[] x5cChain = decodedJWT.getHeaderClaim(HEADER_PARAM_X5C).asArray(String.class);\n        if (x5cChain == null) {\n            // TODO: Need to replace it with the actual business logic.\n            throw new Exception(\"x5c chain was null\");\n        }\n        // Verify the x5c certificate chain and obtain the public key.\n        PublicKey publicKey = verifyChainAndGetPubKey(x5cChain);\n        // Use the public key to verify the signature of the jws.\n        JWTVerifier jwtVerifier = JWT.require(Algorithm.ECDSA256((ECPublicKey) publicKey)).build();\n        jwtVerifier.verify(decodedJWT);\n        // Decode and return the payload.\n        return new String(Base64.getUrlDecoder().decode(decodedJWT.getPayload()), StandardCharsets.UTF_8);\n    }\n    private static PublicKey verifyChainAndGetPubKey(String[] certificates) throws Exception {\n        CertificateFactory certificateFactory = CertificateFactory.getInstance(\"X.509\");\n        List<Certificate> certificateList = new LinkedList<>();\n        for (String certificate : certificates) {\n            InputStream inputStream = new ByteArrayInputStream(Base64.getDecoder().decode(certificate));\n            certificateList.add(certificateFactory.generateCertificate(inputStream));\n        }\n        if (certificateList.size() != X5C_CHAIN_LENGTH) {\n            // TODO: Need to replace it with the actual business logic.\n            throw new Exception(\"invalid cert chain length\");\n        }\n        PKIXCertPathValidatorResult certPathValidatorResult;\n        try {\n            PKIXParameters parameters = loadRootCAAndPKIX();\n            CertPathValidator validator = CertPathValidator.getInstance(\"PKIX\");\n            \n            // TODO: Need to do crl check if not ignore CRL\n            parameters.setRevocationEnabled(false);\n            CertPath certPath = certificateFactory.generateCertPath(certificateList.subList(0, X5C_CHAIN_LENGTH - 1));\n            certPathValidatorResult = (PKIXCertPathValidatorResult) validator.validate(certPath, parameters);\n        } catch (Exception e) {\n            // TODO: Need to replace it with the actual business logic.\n            throw new Exception(e);\n        }\n        Certificate iapCert = certificateList.get(0);\n        if (!(iapCert instanceof X509Certificate)) {\n            // TODO: Need to replace it with the actual business logic.\n            throw new Exception(\"leaf certificate must be X509 format\");\n        }\n        X509Certificate x509Certificate = (X509Certificate) iapCert;\n        if (x509Certificate.getNonCriticalExtensionOIDs() == null ||\n            !x509Certificate.getNonCriticalExtensionOIDs().contains(LEAF_CERT_OID)) {\n            // TODO: Need to replace it with the actual business logic.\n            throw new CertPathValidatorException(\"OID not found\");\n        }\n        return certPathValidatorResult.getPublicKey();\n    }\n    private static PKIXParameters loadRootCAAndPKIX() throws Exception {\n        PKIXParameters parameters;\n        // TODO: Under Java 8, Need to close the resource in the finally block.\n        try (InputStream fis = Files.newInputStream(Paths.get(CA_CERT_FILE_PATH))) {\n            CertificateFactory certificateFactory = CertificateFactory.getInstance(\"X.509\");\n            Certificate trustCert = certificateFactory.generateCertificate(fis);\n            if (!(trustCert instanceof X509Certificate)) {\n                // TODO: Need to replace it with the actual business logic.\n                throw new RuntimeException(\"root certificate must be X509 format\");\n            }\n            Set<TrustAnchor> trustAnchors = new HashSet<>();\n            trustAnchors.add(new TrustAnchor((X509Certificate) trustCert, null));\n            parameters = new PKIXParameters(trustAnchors);\n        }\n        return parameters;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pom文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<dependency>\n    <groupId>com.auth0</groupId>\n    <artifactId>java-jwt</artifactId>\n    <version>4.4.0</version>\n</dependency>\n"
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
916434(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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