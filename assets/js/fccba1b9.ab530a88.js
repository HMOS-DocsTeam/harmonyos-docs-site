"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["983465"], {
147100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_iap_api_iap_rest_iap_server_subscribe_offer_sign_iap_server_subscribe_offer_sign_md_fcc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-iap-api-iap-rest-iap-server-subscribe-offer-sign-iap-server-subscribe-offer-sign-md-fcc.json
var site_docs_ref_iap_api_iap_rest_iap_server_subscribe_offer_sign_iap_server_subscribe_offer_sign_md_fcc_namespaceObject = JSON.parse('{"id":"iap-api/iap-rest/iap-server-subscribe-offer-sign/iap-server-subscribe-offer-sign","title":"生成优惠签名购买参数","description":"开发者在促销优惠场景下需要传入JWT格式的jwsRepresentation参数，该参数包含购买订单涉及的优惠及商品信息。JSON Web Token（JWT）是一个开放标准（RFC 7519），定义了一种安全传输信息的方法，具体请参见jwt.io。开发者可以使用从AppGallery Connect下载的私钥签名生成JWT。密钥生成和下载请参见配置密钥。创建JWT格式的签名购买参数需要以下几步：","source":"@site/docs-ref/iap-api/iap-rest/iap-server-subscribe-offer-sign/iap-server-subscribe-offer-sign.md","sourceDirName":"iap-api/iap-rest/iap-server-subscribe-offer-sign","slug":"/iap-api/iap-rest/iap-server-subscribe-offer-sign/iap-server-subscribe-offer-sign","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-server-subscribe-offer-sign/iap-server-subscribe-offer-sign","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"title":"生成优惠签名购买参数","sidebar_position":14,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-server-subscribe-offer-sign","kit":"应用服务","last_updated":"2026-04-22","slug":"iap-server-subscribe-offer-sign"},"sidebar":"ref","previous":{"title":"测试服务端通知","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-server-notifications-test/iap-server-notifications-test"},"next":{"title":"服务端关键事件通知","permalink":"/harmonyos-docs-site/ref/iap-api/iap-rest/iap-key-event-notifications/iap-key-event-notifications"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/iap-api/iap-rest/iap-server-subscribe-offer-sign/iap-server-subscribe-offer-sign.md


const frontMatter = {
	title: '生成优惠签名购买参数',
	sidebar_position: 14,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/iap-server-subscribe-offer-sign',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'iap-server-subscribe-offer-sign'
};
const contentTitle = '生成优惠签名购买参数';

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
  "value": "创建JWT格式的signature",
  "id": "创建jwt格式的signature",
  "level": 2
}, {
  "value": "代码示例",
  "id": "代码示例",
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
        id: "生成优惠签名购买参数",
        children: "生成优惠签名购买参数"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["开发者在促销优惠场景下需要传入JWT格式的jwsRepresentation参数，该参数包含购买订单涉及的优惠及商品信息。JSON Web Token（JWT）是一个开放标准（RFC 7519），定义了一种安全传输信息的方法，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jwt.io/",
        children: "jwt.io"
      }), "。开发者可以使用从", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/service/josp/agc/index.html",
        children: "AppGallery Connect"
      }), "下载的私钥签名生成JWT。密钥生成和下载请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/iap-kit-guide/iap-preparations/iap-basic-preparation/iap-set-necessary-parameters#%E9%85%8D%E7%BD%AE%E5%AF%86%E9%92%A5",
        children: "配置密钥"
      }), "。创建JWT格式的签名购买参数需要以下几步："]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建JWT Header"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建JWT Payload"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "创建JWT格式的signature"
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
            children: "JWT的预期接收者，确保JWT是针对其自身的，固定为iap-v1。"
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
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["优惠信息扩展信息，为", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/iap-api/iap-rest/iap-server-data-model/iap-server-data-model#purchasereservedinfo",
              children: "PurchaseReservedInfo"
            }), "结构的Json字符串。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建jwt格式的signature",
      children: "创建JWT格式的signature"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Header中指定的算法（ES256）以及密钥ID关联的私钥进行签名生成JWT，可以使用各种开源库来创建JWT格式的token，具体请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://jwt.io/",
        children: "jwt.io"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "代码示例",
      children: "代码示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import com.auth0.jwt.JWT;\nimport com.auth0.jwt.algorithms.Algorithm;\n\nimport java.security.KeyFactory;\nimport java.security.NoSuchAlgorithmException;\nimport java.security.interfaces.ECPrivateKey;\nimport java.security.spec.InvalidKeySpecException;\nimport java.security.spec.PKCS8EncodedKeySpec;\nimport java.util.Base64;\nimport java.util.Map;\n\npublic class JwsRepresentationGenerator {\n    public static String createJwsRepresentation(String signingKey, Map<String, Object> jwtHeader,\n        Map<String, Object> jwtPayload) {\n        try {\n            // Configure a key and download the private key file in AppGallery Connect.\n            byte[] derEncodedSigningKey = Base64.getDecoder().decode(signingKey);\n            KeyFactory keyFactory = KeyFactory.getInstance(\"EC\");\n            PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(derEncodedSigningKey);\n            ECPrivateKey ecPrivateKey = (ECPrivateKey) keyFactory.generatePrivate(keySpec);\n            return JWT.create().withHeader(jwtHeader).withPayload(jwtPayload).sign(Algorithm.ECDSA256(ecPrivateKey));\n        } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {\n            // TODO: Need to replace it with the actual business logic.\n            throw new RuntimeException(e);\n        }\n    }\n}\n"
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