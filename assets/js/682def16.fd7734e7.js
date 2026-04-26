"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["888508"], {
564195(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_account_api_account_api_rest_account_api_common_account_api_common_md_682_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-account-api-account-api-rest-account-api-common-account-api-common-md-682.json
var site_docs_ref_account_api_account_api_rest_account_api_common_account_api_common_md_682_namespaceObject = JSON.parse('{"id":"account-api/account-api-rest/account-api-common/account-api-common","title":"公共说明","description":"TLS协议及加密套件","source":"@site/docs-ref/account-api/account-api-rest/account-api-common/account-api-common.md","sourceDirName":"account-api/account-api-rest/account-api-common","slug":"/account-api/account-api-rest/account-api-common/account-api-common","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-common/account-api-common","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"公共说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-common","kit":"应用服务","last_updated":"2026-04-22","slug":"account-api-common"},"sidebar":"ref","previous":{"title":"ArkTS错误码","permalink":"/harmonyos-docs-site/ref/account-api/account-api-error-code/account-api-error-code"},"next":{"title":"概述","permalink":"/harmonyos-docs-site/ref/account-api/account-api-rest/account-api-obtain-token/account-api-obtain-token-overview/account-api-obtain-token-overview"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/account-api/account-api-rest/account-api-common/account-api-common.md


const frontMatter = {
	title: '公共说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/account-api-common',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'account-api-common'
};
const contentTitle = '公共说明';

const assets = {

};



const toc = [{
  "value": "TLS协议及加密套件",
  "id": "tls协议及加密套件",
  "level": 2
}, {
  "value": "示例代码环境配置",
  "id": "示例代码环境配置",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
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
        id: "公共说明",
        children: "公共说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tls协议及加密套件",
      children: "TLS协议及加密套件"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "TLS版本"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["加密套件 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "（IANA名称）"
              })
            })]
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TLS1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384  TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256  TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384  TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码环境配置",
      children: "示例代码环境配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "REST API接口提供的示例代码，运行时需要进行如下配置："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置maven依赖"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<dependencies>\n    <dependency>\n        <groupId>com.alibaba.fastjson2</groupId>\n        <artifactId>fastjson2</artifactId>\n        <version>2.0.51</version> <!--此处替换为您项目需要的版本-->\n    </dependency>\n    <dependency>\n        <groupId>org.apache.httpcomponents</groupId>\n        <artifactId>httpclient</artifactId>\n        <version>4.5.6</version> <!--此处替换为您项目需要的版本-->\n    </dependency>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <version>1.18.26</version> <!--此处替换为您项目需要的版本-->\n    </dependency>\n    <dependency>\n        <groupId>ch.qos.logback</groupId>\n        <artifactId>logback-classic</artifactId>\n        <version>1.2.11</version> <!--此处替换为您项目需要的版本-->\n    </dependency>\n</dependencies>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "引入CallUtils工具类（请将此工具类与API的示例代码放于同一路径下，如不在同一路径，请手动到API的示例代码添加import）"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import com.alibaba.fastjson2.JSON;\nimport com.alibaba.fastjson2.JSONObject;\nimport lombok.extern.slf4j.Slf4j;\nimport org.apache.http.Header;\nimport org.apache.http.HttpEntity;\nimport org.apache.http.HttpStatus;\nimport org.apache.http.client.config.RequestConfig;\nimport org.apache.http.client.methods.CloseableHttpResponse;\nimport org.apache.http.client.methods.HttpUriRequest;\nimport org.apache.http.config.Registry;\nimport org.apache.http.config.RegistryBuilder;\nimport org.apache.http.conn.socket.ConnectionSocketFactory;\nimport org.apache.http.conn.socket.PlainConnectionSocketFactory;\nimport org.apache.http.conn.ssl.SSLConnectionSocketFactory;\nimport org.apache.http.entity.ContentType;\nimport org.apache.http.entity.StringEntity;\nimport org.apache.http.impl.client.CloseableHttpClient;\nimport org.apache.http.impl.client.HttpClients;\nimport org.apache.http.impl.conn.PoolingHttpClientConnectionManager;\nimport org.apache.http.util.EntityUtils;\nimport javax.net.ssl.SSLContext;\nimport javax.net.ssl.TrustManagerFactory;\nimport java.io.IOException;\nimport java.security.KeyManagementException;\nimport java.security.KeyStore;\nimport java.security.KeyStoreException;\nimport java.security.NoSuchAlgorithmException;\nimport java.util.Map;\nimport java.util.Objects;\nimport java.util.function.BiFunction;\n\n/**\n * HTTP调用工具类\n */\n@Slf4j\npublic class CallUtils {\n    public static String remoteCall(HttpUriRequest request) throws IOException {\n        return remoteCall(request, CallUtils::nspErrorHandler);\n    }\n\n    public static String remoteCallOAuth(HttpUriRequest request) throws IOException {\n        return remoteCall(request, CallUtils::oauthErrorHandler);\n    }\n\n    public static String remoteCallAccountApi(HttpUriRequest request) throws IOException {\n        return remoteCall(request, CallUtils::accountApiErrorHandler);\n    }\n\n    public static <E extends Exception> String remoteCall(HttpUriRequest request,\n        BiFunction<CloseableHttpResponse, String, E> errorHandler) throws IOException, E {\n        try (CloseableHttpResponse response = getClient().execute(request)) {\n            HttpEntity responseEntity = response.getEntity();\n            String ret = responseEntity != null ? EntityUtils.toString(responseEntity) : null;\n            EntityUtils.consume(responseEntity);\n            if (errorHandler != null) {\n                E error = errorHandler.apply(response, ret);\n                if (null != error) {\n                    throw error;\n                }\n            }\n            return ret;\n        }\n    }\n\n    public static JSONObject toJsonObject(String json) {\n        return (JSONObject) JSON.parse(json);\n    }\n\n    public static StringEntity wrapJsonEntity(Object obj) {\n        return new StringEntity(CallUtils.toJsonString(obj), ContentType.create(\"application/json\", \"UTF-8\"));\n    }\n\n    public static String toJsonString(Object obj) {\n        return JSON.toJSONString(obj);\n    }\n\n    public static IOException nspErrorHandler(CloseableHttpResponse response, String rawBody) {\n        int statusCode = response.getStatusLine().getStatusCode();\n        if (statusCode != 200) {\n            return new IOException(\"call failed! status:\" + statusCode + \", response data: \" + rawBody);\n        }\n        Header nspStatus = response.getFirstHeader(\"NSP_STATUS\");\n        if (Objects.nonNull(nspStatus)) {\n            return new IOException(\"call failed! nsp_status:\" + nspStatus.getValue() + \", response data: \" + rawBody);\n        }\n        return null;\n    }\n\n    public static IOException oauthErrorHandler(CloseableHttpResponse response, String rawBody) {\n        int statusCode = response.getStatusLine().getStatusCode();\n        // http状态码为200，请求成功\n        if (statusCode == HttpStatus.SC_OK) {\n            return null;\n        }\n        // http状态码非200，解析响应的body，业务视情况进行处理\n        Map<String, Object> errorResponseBody = CallUtils.toJsonObject(rawBody);\n        // 业务响应主错误码\n        Object error = errorResponseBody.get(\"error\");\n        // 业务响应子错误码\n        Object subError = errorResponseBody.get(\"sub_error\");\n        // 业务可根据返回的主+子错误码进行自己的业务处理；例：错误码不为空，抛出异常\n        if (Objects.nonNull(error) && Objects.nonNull(subError)) {\n            return new IOException(\"call failed! http status code: \" + statusCode + \", response data: \" + rawBody);\n        }\n        return null;\n    }\n\n    public static IOException accountApiErrorHandler(CloseableHttpResponse response, String rawBody) {\n        int statusCode = response.getStatusLine().getStatusCode();\n        // http状态码不是200，请求失败\n        if (statusCode != 200) {\n            return new IOException(\"call failed! http status code: \" + statusCode + \", response data: \" + rawBody);\n        }\n        // http状态码为200，解析响应的body，判断业务错误码\n        JSONObject errorResponseBody = CallUtils.toJsonObject(rawBody);\n        // 业务响应码\n        Integer resultCode = errorResponseBody.getInteger(\"resultCode\");\n        // resultCode为0表示成功，非0表示失败\n        if (Objects.nonNull(resultCode) && resultCode != 0) {\n            return new IOException(\"call failed! http status code: \" + statusCode + \", response data: \" + rawBody);\n        }\n        return null;\n    }\n\n    private static CloseableHttpClient getClient() {\n        PoolingHttpClientConnectionManager connectionManager = buildConnectionManager(\n            new String[] {\"TLSv1.2\"}, new String[] {\n                \"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384\", \"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256\",\n                \"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384\", \"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256\"\n            });\n        connectionManager.setMaxTotal(400);\n        connectionManager.setDefaultMaxPerRoute(400);\n        RequestConfig config = RequestConfig.custom()\n            .setConnectionRequestTimeout(100)\n            .setRedirectsEnabled(false)\n            .build();\n        return HttpClients.custom()\n            .useSystemProperties()\n            .setConnectionManager(connectionManager)\n            .setDefaultRequestConfig(config)\n            .build();\n    }\n\n    private static PoolingHttpClientConnectionManager buildConnectionManager(String[] supportedProtocols,\n        String[] supportedCipherSuites) {\n        PoolingHttpClientConnectionManager connectionManager = null;\n        try {\n            SSLContext sc = SSLContext.getInstance(\"TLSv1.2\");\n            TrustManagerFactory tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());\n            tmf.init((KeyStore) null);\n            sc.init(null, tmf.getTrustManagers(), null);\n            SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sc, supportedProtocols,\n                supportedCipherSuites, SSLConnectionSocketFactory.getDefaultHostnameVerifier());\n            Registry<ConnectionSocketFactory> registry = RegistryBuilder.<ConnectionSocketFactory>create()\n                .register(\"http\", new PlainConnectionSocketFactory())\n                .register(\"https\", sslsf)\n                .build();\n            connectionManager = new PoolingHttpClientConnectionManager(registry);\n        } catch (NoSuchAlgorithmException | KeyStoreException | KeyManagementException e) {\n            log.error(\"build connect manager failed\", e);\n        }\n        return connectionManager;\n    }\n}\n"
          })
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