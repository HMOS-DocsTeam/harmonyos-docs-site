"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["628127"], {
419379(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_network_api_network_api_arkts_js_apis_http_js_apis_http_md_8d0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-network-api-network-api-arkts-js-apis-http-js-apis-http-md-8d0.json
var site_docs_ref_system_network_api_network_api_network_api_arkts_js_apis_http_js_apis_http_md_8d0_namespaceObject = JSON.parse('{"id":"system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http","title":"@ohos.net.http (数据请求)","description":"本模块提供HTTP数据请求能力。应用可以通过HTTP发起一个数据请求，支持常见的GET、POST、OPTIONS、HEAD、PUT、DELETE、TRACE、CONNECT方法。","source":"@site/docs-ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http.md","sourceDirName":"system-network-api/network-api/network-api-arkts/js-apis-http","slug":"/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"@ohos.net.http (数据请求)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http","kit":"系统","last_updated":"2026-04-22","slug":"js-apis-http"},"sidebar":"ref","previous":{"title":"@ohos.net.ethernet (以太网连接管理)","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-api-arkts/js-apis-net-ethernet/js-apis-net-ethernet"},"next":{"title":"@ohos.net.mdns (MDNS管理)","permalink":"/harmonyos-docs-site/ref/system-network-api/network-api/network-api-arkts/js-apis-net-mdns/js-apis-net-mdns"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http.md


const frontMatter = {
	title: '@ohos.net.http (数据请求)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-http',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'js-apis-http'
};
const contentTitle = '@ohos.net.http (数据请求)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "完整示例",
  "id": "完整示例",
  "level": 2
}, {
  "value": "http.createHttp",
  "id": "httpcreatehttp",
  "level": 2
}, {
  "value": "HttpRequest",
  "id": "httprequest",
  "level": 2
}, {
  "value": "request",
  "id": "request",
  "level": 3
}, {
  "value": "request",
  "id": "request-1",
  "level": 3
}, {
  "value": "request",
  "id": "request-2",
  "level": 3
}, {
  "value": "destroy",
  "id": "destroy",
  "level": 3
}, {
  "value": "requestInStream10+",
  "id": "requestinstream10",
  "level": 3
}, {
  "value": "requestInStream10+",
  "id": "requestinstream10-1",
  "level": 3
}, {
  "value": "requestInStream10+",
  "id": "requestinstream10-2",
  "level": 3
}, {
  "value": "on(&quot;headerReceive&quot;)(deprecated)",
  "id": "onheaderreceivedeprecated",
  "level": 3
}, {
  "value": "off(&quot;headerReceive&quot;)(deprecated)",
  "id": "offheaderreceivedeprecated",
  "level": 3
}, {
  "value": "on(&quot;headersReceive&quot;)8+",
  "id": "onheadersreceive8",
  "level": 3
}, {
  "value": "off(&quot;headersReceive&quot;)8+",
  "id": "offheadersreceive8",
  "level": 3
}, {
  "value": "once(&quot;headersReceive&quot;)8+",
  "id": "onceheadersreceive8",
  "level": 3
}, {
  "value": "on(&quot;dataReceive&quot;)10+",
  "id": "ondatareceive10",
  "level": 3
}, {
  "value": "off(&quot;dataReceive&quot;)10+",
  "id": "offdatareceive10",
  "level": 3
}, {
  "value": "on(&quot;dataEnd&quot;)10+",
  "id": "ondataend10",
  "level": 3
}, {
  "value": "off(&quot;dataEnd&quot;)10+",
  "id": "offdataend10",
  "level": 3
}, {
  "value": "on(&#39;dataReceiveProgress&#39;)10+",
  "id": "ondatareceiveprogress10",
  "level": 3
}, {
  "value": "off(&#39;dataReceiveProgress&#39;)10+",
  "id": "offdatareceiveprogress10",
  "level": 3
}, {
  "value": "on(&#39;dataSendProgress&#39;)11+",
  "id": "ondatasendprogress11",
  "level": 3
}, {
  "value": "off(&#39;dataSendProgress&#39;)11+",
  "id": "offdatasendprogress11",
  "level": 3
}, {
  "value": "HttpRequestOptions",
  "id": "httprequestoptions",
  "level": 2
}, {
  "value": "RequestMethod",
  "id": "requestmethod",
  "level": 2
}, {
  "value": "ResponseCode",
  "id": "responsecode",
  "level": 2
}, {
  "value": "HttpResponse",
  "id": "httpresponse",
  "level": 2
}, {
  "value": "ClientCert11+",
  "id": "clientcert11",
  "level": 2
}, {
  "value": "PerformanceTiming11+",
  "id": "performancetiming11",
  "level": 2
}, {
  "value": "DataReceiveProgressInfo11+",
  "id": "datareceiveprogressinfo11",
  "level": 2
}, {
  "value": "DataSendProgressInfo11+",
  "id": "datasendprogressinfo11",
  "level": 2
}, {
  "value": "属性",
  "id": "属性",
  "level": 3
}, {
  "value": "MultiFormData11+",
  "id": "multiformdata11",
  "level": 2
}, {
  "value": "http.createHttpResponseCache9+",
  "id": "httpcreatehttpresponsecache9",
  "level": 2
}, {
  "value": "HttpResponseCache9+",
  "id": "httpresponsecache9",
  "level": 2
}, {
  "value": "flush9+",
  "id": "flush9",
  "level": 3
}, {
  "value": "flush9+",
  "id": "flush9-1",
  "level": 3
}, {
  "value": "delete9+",
  "id": "delete9",
  "level": 3
}, {
  "value": "delete9+",
  "id": "delete9-1",
  "level": 3
}, {
  "value": "HttpDataType9+",
  "id": "httpdatatype9",
  "level": 2
}, {
  "value": "HttpProtocol9+",
  "id": "httpprotocol9",
  "level": 2
}, {
  "value": "CertType11+",
  "id": "certtype11",
  "level": 2
}, {
  "value": "CertificatePinning12+",
  "id": "certificatepinning12",
  "level": 2
}, {
  "value": "HttpProxy10+",
  "id": "httpproxy10",
  "level": 2
}, {
  "value": "AddressFamily15+",
  "id": "addressfamily15",
  "level": 2
}, {
  "value": "Credential18+",
  "id": "credential18",
  "level": 2
}, {
  "value": "ServerAuthentication18+",
  "id": "serverauthentication18",
  "level": 2
}, {
  "value": "TlsConfig18+",
  "id": "tlsconfig18",
  "level": 2
}, {
  "value": "TlsVersion18+",
  "id": "tlsversion18",
  "level": 2
}, {
  "value": "TlsOptions18+",
  "id": "tlsoptions18",
  "level": 2
}, {
  "value": "RemoteValidation18+",
  "id": "remotevalidation18",
  "level": 2
}, {
  "value": "AuthenticationType18+",
  "id": "authenticationtype18",
  "level": 2
}, {
  "value": "CipherSuite18+",
  "id": "ciphersuite18",
  "level": 2
}, {
  "value": "TlsV13CipherSuite18+",
  "id": "tlsv13ciphersuite18",
  "level": 2
}, {
  "value": "TlsV12CipherSuite18+",
  "id": "tlsv12ciphersuite18",
  "level": 2
}, {
  "value": "TlsV11CipherSuite18+",
  "id": "tlsv11ciphersuite18",
  "level": 2
}, {
  "value": "TlsV10CipherSuite18+",
  "id": "tlsv10ciphersuite18",
  "level": 2
}, {
  "value": "TlsV13SpecificCipherSuite18+",
  "id": "tlsv13specificciphersuite18",
  "level": 2
}, {
  "value": "TlsV12SpecificCipherSuite18+",
  "id": "tlsv12specificciphersuite18",
  "level": 2
}, {
  "value": "TlsV10SpecificCipherSuite18+",
  "id": "tlsv10specificciphersuite18",
  "level": 2
}, {
  "value": "SslType20+",
  "id": "ssltype20",
  "level": 2
}, {
  "value": "InterceptorType22+",
  "id": "interceptortype22",
  "level": 2
}, {
  "value": "HttpRequestContext22+",
  "id": "httprequestcontext22",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-1",
  "level": 3
}, {
  "value": "ChainContinue22+",
  "id": "chaincontinue22",
  "level": 2
}, {
  "value": "HttpInterceptor22+",
  "id": "httpinterceptor22",
  "level": 2
}, {
  "value": "属性",
  "id": "属性-2",
  "level": 3
}, {
  "value": "interceptorHandle22+",
  "id": "interceptorhandle22",
  "level": 3
}, {
  "value": "HttpInterceptorChain22+",
  "id": "httpinterceptorchain22",
  "level": 2
}, {
  "value": "addChain22+",
  "id": "addchain22",
  "level": 3
}, {
  "value": "getChain22+",
  "id": "getchain22",
  "level": 3
}, {
  "value": "apply22+",
  "id": "apply22",
  "level": 3
}, {
  "value": "PathPreference23+",
  "id": "pathpreference23",
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
    object: "object",
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
        id: "ohosnethttp-数据请求",
        children: "@ohos.net.http (数据请求)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供HTTP数据请求能力。应用可以通过HTTP发起一个数据请求，支持常见的GET、POST、OPTIONS、HEAD、PUT、DELETE、TRACE、CONNECT方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(252110)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "完整示例",
      children: "完整示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(934443)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在本文档的示例中，通过this.context来获取UIAbilityContext，其中this代表继承自UIAbility的UIAbility实例。如需在页面中使用UIAbilityContext提供的能力，请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-usage#%E8%8E%B7%E5%8F%96uiability%E7%9A%84%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF",
        children: "获取UIAbility的上下文信息"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 引入包名\nimport { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\n\nlet context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;\n// 每一个httpRequest对应一个HTTP请求任务，不可复用。\nlet httpRequest = http.createHttp();\n// 用于订阅HTTP响应头，此接口会比request请求先返回。可以根据业务需要订阅此消息。\n// 从API 8开始，使用on('headersReceive', Callback)替代on('headerReceive', AsyncCallback)。 8+\nhttpRequest.on('headersReceive', (header: Object) => {\n  console.info('header: ' + JSON.stringify(header));\n});\n\nhttpRequest.request(// 填写HTTP请求的URL地址，可以带参数也可以不带参数。URL地址需要开发者自定义。请求的参数可以在extraData中指定。\n  \"EXAMPLE_URL\",\n  {\n    method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET。\n    // 当使用POST请求时此字段用于传递请求体内容，具体格式与服务端协商确定。\n    extraData: 'data to send',\n    expectDataType: http.HttpDataType.STRING, // 可选，指定返回数据的类型。\n    usingCache: true, // 可选，默认为true。\n    priority: 1, // 可选，默认为1。\n    // 开发者根据自身业务需要添加header字段，且header字段不支持传入map对象。\n    header: { 'Accept' : 'application/json' },\n    readTimeout: 60000, // 可选，默认为60000ms。\n    connectTimeout: 60000, // 可选，默认为60000ms。\n    usingProtocol: http.HttpProtocol.HTTP1_1, // 可选，协议类型默认值由系统自动指定。\n    usingProxy: false, // 可选，默认不使用网络代理，自API 10开始支持该属性。\n    caPath: '/path/to/cacert.pem', // 可选，默认使用系统预设CA证书，自API 10开始支持该属性。\n    caData: '-----BEGIN CERTIFICATE-----\\n' +\n        'MIIDaTCCAlGgAwIBAgIICN287lmB2cMwDQYJKoZIhvcNAQELBQAwgYoxCzAJBgNV\\n' +\n        'BAYTAkNOMRMwEQYDVQQDDApleGFtcGxlLmNuMRAwDgYDVQQKDAdDb21wYW55MREw\\n' +\n        'DwYDVQQLDAhEaXZpc2lvbjEOMAwGA1UECAwFQW5IdWkxDjAMBgNVBAcMBUhlRmVp\\n' +\n        'MSEwHwYJKoZIhvcNAQkBFhJleGFtcGxlQGV4YW1wbGUuY24wHhcNMjUwNDEzMDAy\\n' +\n        'MjQxWhcNMjgwNDEzMDAyMjQxWjBeMQswCQYDVQQGEwJDTjESMBAGA1UEAwwJMTI3\\n' +\n        'LjAuMC4xMQkwBwYDVQQKDAAxCTAHBgNVBAsMADEJMAcGA1UECAwAMQkwBwYDVQQH\\n' +\n        'DAAxDzANBgkqhkiG9w0BCQEWADCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\\n' +\n        'ggEBANN/JrQC8dy7sxUk+TDJlGlq4h8lajdqSASkFbWVBadU4eMCbRrKejXuFX/n\\n' +\n        'Yu4J3wkgni0NKRejdWu/M+LLibQEIF9RUGNR/OgdlR4AKr8ZxmG44+7Ps2aiDcOy\\n' +\n        'Z95UcxYj59ctfFk63cacbBi19aq200spjl/H0jTVsQ2/JvwMVEH62WbyjIJ3KXgq\\n' +\n        'yyjf75rKbR9CdVdGk+OoR4S4c6nY5cTZP6T7iCupYR6MpKEtIR2bbams/N5GxQEh\\n' +\n        '9+7YxswTQn4EkVhi+UOFZolYLhtIdoLThmStN+WiSL5VDvchAkTUmwUBTGV21WnH\\n' +\n        'qo6J1t7XtwUpAZF6OuWl85R8D50CAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAqjKq\\n' +\n        'gwR+4B6bwdAOZ6k0cutLqxvVgBaktX28omuYtoiYagM0zfB8/8WijXL8jT1VLEFx\\n' +\n        'wPaojwegqYWANfQkPd7A6rjsabgOH7oYBCDoCH52cjzGlJunC0BL6w5g3z6MCOB4\\n' +\n        'Ciz8rnYMvYqQJiMqrO7Po9onoFBHiRQGO4Wva3O8ErEmd2dKvXb3vN02P3T7CtwM\\n' +\n        'Z6D0rtZbzdsSOQfGcX08WFIfvfpz6tdU/X/6VqKrt5oiaNQH7ded6gJ3C6RM/Q/x\\n' +\n        'I2j/hSKy0yU7FoCFSOnlhxbm3TlbIvtjZKQ9ymK4x7iE0VKqExUAA6Z8qsIUBUt4\\n' +\n        'aqNDeZWXFBqrSujLJA==\\n' +\n        '-----END CERTIFICATE-----', // 可选，默认使用系统预设CA证书，自API 20开始支持该属性。\n    clientCert: { // 可选，默认不使用客户端证书，自API 11开始支持该属性。\n      certPath: '/path/to/client.pem', // 默认不使用客户端证书，自API 11开始支持该属性。\n      keyPath: '/path/to/client.key', // 若证书包含Key信息，传入空字符串，自API 11开始支持该属性。\n      certType: http.CertType.PEM, // 可选，默认使用PEM，自API 11开始支持该属性。\n      keyPassword: \"passwordToKey\" // 可选，输入key文件的密码，自API 11开始支持该属性。\n    },\n    certificatePinning: [ // 可选，支持证书锁定配置信息的动态设置，自API 12开始支持该属性。\n      {\n        publicKeyHash: 'Pin1', // 由应用传入的证书PIN码，自API 12开始支持该属性。\n        hashAlgorithm: 'SHA-256' // 加密算法，当前仅支持SHA-256，自API 12开始支持该属性。\n      }, {\n        publicKeyHash: 'Pin2', // 由应用传入的证书PIN码，自API 12开始支持该属性。\n        hashAlgorithm: 'SHA-256' // 加密算法，当前仅支持SHA-256，自API 12开始支持该属性。\n      }\n    ],\n    multiFormDataList: [ // 可选，仅当Header中，'content-Type'为'multipart/form-data'时生效，自API 11开始支持该属性。\n      {\n        name: \"Part1\", // 数据名，自API 11开始支持该属性。\n        contentType: 'text/plain', // 数据类型，自API 11开始支持该属性。\n        data: 'Example data', // 可选，数据内容，自API 11开始支持该属性。\n        remoteFileName: 'example.txt' // 可选，自API 11开始支持该属性。\n      }, {\n        name: \"Part2\", // 数据名，自API 11开始支持该属性。\n        contentType: 'text/plain', // 数据类型，自API 11开始支持该属性。\n        // data/app/el2/100/base/com.example.myapplication/haps/entry/files/fileName.txt\n        filePath: `${context.filesDir}/fileName.txt`, // 可选，传入文件路径，自API 11开始支持该属性。\n        remoteFileName: 'fileName.txt' // 可选，自API 11开始支持该属性。\n      }\n    ],\n    addressFamily: http.AddressFamily.DEFAULT, // 可选，系统默认选择目标域名的IPv4地址或IPv6地址，自API 15开始支持该属性。\n    customMethod: 'GET', // 可选，自API 23开始支持该属性。\n    maxRedirects: 30, // 可选，默认值是30次，自API 23开始支持该属性。\n    sniHostName: \"www.example.com\" // 可选，自API 23开始支持该属性。\n  },\n  (err: BusinessError, data: http.HttpResponse) => {\n    if (!err) {\n      // data.result为HTTP响应内容，可根据业务需要进行解析。\n      console.info('Result:' + JSON.stringify(data.result));\n      console.info('code:' + JSON.stringify(data.responseCode));\n      console.info('type:' + JSON.stringify(data.resultType));\n      // data.header为HTTP响应头，可根据业务需要进行解析。\n      console.info('header:' + JSON.stringify(data.header));\n      console.info('cookies:' + JSON.stringify(data.cookies)); // 自API version 8开始支持cookie。\n      // 取消订阅HTTP响应头事件。\n      httpRequest.off('headersReceive');\n      // 当该请求使用完毕时，开发者务必调用destroy方法释放资源，避免出现内存泄漏。\n      httpRequest.destroy();\n    } else {\n      console.error('error:' + JSON.stringify(err));\n      // 取消订阅HTTP响应头事件。\n      httpRequest.off('headersReceive');\n      // 当该请求使用完毕时，开发者务必调用destroy方法释放资源，避免出现内存泄漏。\n      httpRequest.destroy();\n    }\n  });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(211650)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "console.info()输出的数据中包含换行符会导致数据出现截断现象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自API 12开始支持接收经过brotli算法压缩的HTTP响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "httpcreatehttp",
      children: "http.createHttp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "createHttp(): HttpRequest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个HTTP请求，里面包括发起请求、中断请求、订阅/取消订阅HTTP Response Header事件。当发起多个HTTP请求时，需为每个HTTP请求创建对应HttpRequest对象。每一个HttpRequest对象对应一个HTTP请求。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(93390)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当该请求使用完毕时，需调用destroy方法释放资源，否则会出现内存泄露问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HttpRequest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回一个HttpRequest对象，里面包括request、requestInStream、destroy、on和off方法。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "httprequest",
      children: "HttpRequest"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP请求任务。在调用HttpRequest的方法前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#httpcreatehttp",
        children: "createHttp()"
      }), "创建一个任务。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request",
      children: "request"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "request(url: string, callback: AsyncCallback<HttpResponse>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据URL地址，发起HTTP网络请求，使用callback方式作为异步方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(355075)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(1) 此接口仅支持接收5MB以内的数据，如果需要接收超过5MB的数据，则需主动在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#httprequestoptions",
        children: "HttpRequestOptions"
      }), "的maxLimit中进行设置，或者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#requestinstream10",
        children: "requestInStream"
      }), "接口发起流式请求。自API version 23开始，本接口支持的最大接收数据量为50MB，API version 23之前仍为5MB，超过5MB会接收失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(2) 如需传入cookies，请开发者自行在参数options中添加。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(3) 若URL包含中文或其他语言，需先调用encodeURL(URL)编码，再发起请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起网络请求的URL地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#httpresponse",
              children: "HttpResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-http/errorcode-net-http",
        children: "HTTP错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP错误码映射关系：2300000 + curl错误码。更多常用错误码可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://curl.se/libcurl/c/libcurl-errors.html",
        children: "curl错误码"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupported protocol."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid URL format or missing URL."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the proxy name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the host name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid server response."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to the remote resource denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error in the HTTP2 framing layer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transferred a partial file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write the received data to the disk or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upload failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to open or read local data from the file or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation timeout."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of redirections reaches the maximum allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300052"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The server returned nothing (no header or data)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300055"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to send data to the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300056"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to receive data from the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300058"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local SSL certificate error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified SSL cipher cannot be used."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid SSL peer certificate or SSH remote key."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid HTTP encoding format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300063"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum file size exceeded."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote disk full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300077"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SSL CA certificate does not exist or is inaccessible."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300078"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300997"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleartext traffic not permitted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is not allowed to access this domain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.request(\"EXAMPLE_URL\", (err: Error, data: http.HttpResponse) => {\n  if (!err) {\n    console.info('Result:' + data.result);\n    console.info('code:' + data.responseCode);\n    console.info('type:' + JSON.stringify(data.resultType));\n    console.info('header:' + JSON.stringify(data.header));\n    console.info('cookies:' + data.cookies); // 自API version 8开始支持cookie。\n  } else {\n    console.error('error:' + JSON.stringify(err));\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-1",
      children: "request"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "request(url: string, options: HttpRequestOptions, callback: AsyncCallback<HttpResponse>):void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据URL地址和相关配置项，发起HTTP网络请求，使用callback方式作为异步方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(859120)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(1) 此接口仅支持接收5MB以内的数据，如果需要接收超过5MB的数据，则需主动在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#httprequestoptions",
        children: "HttpRequestOptions"
      }), "的maxLimit中进行设置，或者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#requestinstream10",
        children: "requestInStream"
      }), "接口发起流式请求。自API version 23开始，本接口支持的最大接收数据量为50MB，API version 23之前仍为5MB，超过5MB会接收失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(2) 如需传入cookies，请开发者自行在参数options中添加。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(3) 若URL包含中文或其他语言，需先调用encodeURL(URL)编码，再发起请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起网络请求的URL地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HttpRequestOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#httprequestoptions",
              children: "HttpRequestOptions"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["AsyncCallback<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#httpresponse",
              children: "HttpResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。当请求成功时，回调内容是", (0,jsx_runtime.jsx)(_components.a, {
              href: "#httpresponse",
              children: "HttpResponse"
            }), " ，请求失败时为undefined。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-http/errorcode-net-http",
        children: "HTTP错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP错误码映射关系：2300000 + curl错误码。更多常用错误码可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://curl.se/libcurl/c/libcurl-errors.html",
        children: "curl错误码"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupported protocol."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid URL format or missing URL."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the proxy name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the host name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid server response."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to the remote resource denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error in the HTTP2 framing layer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transferred a partial file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write the received data to the disk or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upload failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to open or read local data from the file or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation timeout."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of redirections reaches the maximum allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300052"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The server returned nothing (no header or data)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300055"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to send data to the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300056"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to receive data from the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300058"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local SSL certificate error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified SSL cipher cannot be used."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid SSL peer certificate or SSH remote key."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid HTTP encoding format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300063"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum file size exceeded."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote disk full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300077"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SSL CA certificate does not exist or is inaccessible."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300078"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300997"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleartext traffic not permitted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is not allowed to access this domain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\n\nclass Header {\n  public contentType: string;\n\n  constructor(contentType: string) {\n    this.contentType = contentType;\n  }\n}\n\nlet httpRequest = http.createHttp();\nlet options: http.HttpRequestOptions = {\n    method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET。\n    // 当使用POST请求时此字段用于传递请求体内容，具体格式与服务端协商确定。\n    extraData: 'data to send',\n    expectDataType: http.HttpDataType.STRING, // 可选，指定返回数据的类型。\n    usingCache: true, // 可选，默认为true。\n    priority: 1, // 可选，默认为1。\n    // 开发者根据自身业务需要添加header字段。\n    header: new Header('application/json'),\n    readTimeout: 60000, // 可选，默认为60000ms。\n    connectTimeout: 60000, // 可选，默认为60000ms。\n    usingProtocol: http.HttpProtocol.HTTP1_1, // 可选，协议类型默认值由系统自动指定。\n    usingProxy: false, // 可选，默认不使用网络代理，自API 10开始支持该属性。\n};\n\nhttpRequest.request(\"EXAMPLE_URL\", options, (err: Error, data: http.HttpResponse) => {\n  if (!err) {\n    console.info('Result:' + data.result);\n    console.info('code:' + data.responseCode);\n    console.info('type:' + JSON.stringify(data.resultType));\n    console.info('header:' + JSON.stringify(data.header));\n    console.info('cookies:' + data.cookies); // 自API version 8开始支持cookie。\n  } else {\n    console.error('error:' + JSON.stringify(err));\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "request-2",
      children: "request"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "request(url: string, options? : HttpRequestOptions): Promise<HttpResponse>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据URL地址，发起HTTP网络请求，使用Promise方式作为异步方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(331761)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["(1) 此接口仅支持接收5MB以内的数据，如果需要接收超过5MB的数据，则需主动在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#httprequestoptions",
        children: "HttpRequestOptions"
      }), "的maxLimit中进行设置，或者使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#requestinstream10",
        children: "requestInStream"
      }), "接口发起流式请求。自API version 23开始，本接口支持的最大接收数据量为50MB，API version 23之前仍为5MB，超过5MB会接收失败。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(2) 如需传入cookies，请开发者自行在参数options中添加。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(3) 若URL包含中文或其他语言，需先调用encodeURL(URL)编码，再发起请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起网络请求的URL地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HttpRequestOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#httprequestoptions",
              children: "HttpRequestOptions"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
              href: "#httpresponse",
              children: "HttpResponse"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以Promise形式返回发起请求的结果。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-http/errorcode-net-http",
        children: "HTTP错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP错误码映射关系：2300000 + curl错误码。更多常用错误码可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://curl.se/libcurl/c/libcurl-errors.html",
        children: "curl错误码"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupported protocol."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid URL format or missing URL."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the proxy name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the host name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid server response."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to the remote resource denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error in the HTTP2 framing layer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transferred a partial file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write the received data to the disk or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upload failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to open or read local data from the file or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation timeout."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of redirections reaches the maximum allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300052"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The server returned nothing (no header or data)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300055"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to send data to the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300056"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to receive data from the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300058"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local SSL certificate error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified SSL cipher cannot be used."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid SSL peer certificate or SSH remote key."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid HTTP encoding format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300063"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum file size exceeded."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote disk full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300077"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SSL CA certificate does not exist or is inaccessible."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300078"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300997"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleartext traffic not permitted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is not allowed to access this domain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\n\nclass Header {\n  public contentType: string;\n\n  constructor(contentType: string) {\n    this.contentType = contentType;\n  }\n}\n\nlet httpRequest = http.createHttp();\nlet promise = httpRequest.request(\"EXAMPLE_URL\", {\n  method: http.RequestMethod.GET,\n  connectTimeout: 60000,\n  readTimeout: 60000,\n  header: new Header('application/json')\n});\npromise.then((data:http.HttpResponse) => {\n  console.info('Result:' + data.result);\n  console.info('code:' + data.responseCode);\n  console.info('type:' + JSON.stringify(data.resultType));\n  console.info('header:' + JSON.stringify(data.header));\n  console.info('cookies:' + data.cookies); // 自API version 8开始支持cookie。\n  console.info('header.content-Type:' + data.header);\n  console.info('header.Status-Line:' + data.header);\n}).catch((err:Error) => {\n  console.error('error:' + JSON.stringify(err));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "destroy",
      children: "destroy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "destroy(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "终止HTTP请求任务，同时释放系统资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\nlet httpRequest = http.createHttp();\n\nhttpRequest.destroy();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requestinstream10",
      children: "requestInStream10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requestInStream(url: string, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据URL地址，发起HTTP网络请求并返回流式响应，使用callback方式作为异步方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起网络请求的URL地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。当请求成功，err为undefined，返回HTTP请求响应错误码；否则为错误对象。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-http/errorcode-net-http",
        children: "HTTP错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP错误码映射关系：2300000 + curl错误码。更多常用错误码可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://curl.se/libcurl/c/libcurl-errors.html",
        children: "curl错误码"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupported protocol."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid URL format or missing URL."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the proxy name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the host name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid server response."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to the remote resource denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error in the HTTP2 framing layer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transferred a partial file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write the received data to the disk or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upload failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to open or read local data from the file or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation timeout."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of redirections reaches the maximum allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300052"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The server returned nothing (no header or data)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300055"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to send data to the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300056"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to receive data from the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300058"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local SSL certificate error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified SSL cipher cannot be used."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid SSL peer certificate or SSH remote key."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid HTTP encoding format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300063"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum file size exceeded."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote disk full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300077"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SSL CA certificate does not exist or is inaccessible."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300078"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300997"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleartext traffic not permitted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is not allowed to access this domain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.requestInStream(\"EXAMPLE_URL\", (err: BusinessError, data: number) => {\n  if (!err) {\n    console.info(\"requestInStream OK! ResponseCode is \" + JSON.stringify(data));\n  } else {\n    console.error(\"requestInStream ERROR : err = \" + JSON.stringify(err));\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requestinstream10-1",
      children: "requestInStream10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requestInStream(url: string, options: HttpRequestOptions, callback: AsyncCallback<number>): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据URL地址和相关配置项，发起HTTP网络请求并返回流式响应，使用callback方式作为异步方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起网络请求的URL地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HttpRequestOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#httprequestoptions",
              children: "HttpRequestOptions"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AsyncCallback<number>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调函数。当请求成功，err为undefined，返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#responsecode",
              children: "HTTP请求响应错误码"
            }), "；否则为错误对象。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-http/errorcode-net-http",
        children: "HTTP错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP错误码映射关系：2300000 + curl错误码。更多常用错误码可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://curl.se/libcurl/c/libcurl-errors.html",
        children: "curl错误码"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupported protocol."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid URL format or missing URL."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the proxy name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the host name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid server response."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to the remote resource denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error in the HTTP2 framing layer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transferred a partial file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write the received data to the disk or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upload failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to open or read local data from the file or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation timeout."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of redirections reaches the maximum allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300052"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The server returned nothing (no header or data)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300055"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to send data to the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300056"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to receive data from the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300058"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local SSL certificate error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified SSL cipher cannot be used."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid SSL peer certificate or SSH remote key."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid HTTP encoding format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300063"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum file size exceeded."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote disk full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300077"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SSL CA certificate does not exist or is inaccessible."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300078"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300997"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleartext traffic not permitted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is not allowed to access this domain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nclass Header {\n  public contentType: string;\n\n  constructor(contentType: string) {\n    this.contentType = contentType;\n  }\n}\n\nlet httpRequest = http.createHttp();\nlet options: http.HttpRequestOptions = {\n    method: http.RequestMethod.POST, // 可选，默认为http.RequestMethod.GET。\n    // 当使用POST请求时此字段用于传递请求体内容，具体格式与服务端协商确定。\n    extraData: 'data to send',\n    expectDataType: http.HttpDataType.STRING, // 可选，指定返回数据的类型。\n    usingCache: true, // 可选，默认为true。\n    priority: 1, // 可选，默认为1。\n    // 开发者根据自身业务需要添加header字段。\n    header: new Header('application/json'),\n    readTimeout: 60000, // 可选，默认为60000ms。\n    connectTimeout: 60000, // 可选，默认为60000ms。\n    usingProtocol: http.HttpProtocol.HTTP1_1, // 可选，协议类型默认值由系统自动指定。\n    usingProxy: false, // 可选，默认不使用网络代理，自API 10开始支持该属性。\n};\nhttpRequest.requestInStream(\"EXAMPLE_URL\", options, (err: BusinessError<void> , data: number) => {\n  if (!err) {\n    console.info(\"requestInStream OK! ResponseCode is \" + JSON.stringify(data));\n  } else {\n    console.error(\"requestInStream ERROR : err = \" + JSON.stringify(err));\n  }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requestinstream10-2",
      children: "requestInStream10+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "requestInStream(url: string, options? : HttpRequestOptions): Promise<number>"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "根据URL地址，发起HTTP网络请求并返回流式响应，使用Promise方式作为异步方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "需要权限"
        })
      }), "：ohos.permission.INTERNET"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 15开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：SystemCapability.Communication.NetStack"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发起网络请求的URL地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "options"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HttpRequestOptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "#httprequestoptions",
              children: "HttpRequestOptions"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Promise<number>"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["以Promise形式返回", (0,jsx_runtime.jsx)(_components.a, {
              href: "#responsecode",
              children: "发起请求的结果"
            }), "。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal",
        children: "通用错误码"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-http/errorcode-net-http",
        children: "HTTP错误码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["HTTP错误码映射关系：2300000 + curl错误码。更多常用错误码可参考：", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://curl.se/libcurl/c/libcurl-errors.html",
        children: "curl错误码"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsupported protocol."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid URL format or missing URL."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the proxy name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to resolve the host name."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to connect to the server."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid server response."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to the remote resource denied."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300016"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error in the HTTP2 framing layer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transferred a partial file."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to write the received data to the disk or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upload failed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300026"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to open or read local data from the file or application."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300027"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of memory."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300028"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation timeout."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300047"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The number of redirections reaches the maximum allowed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300052"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The server returned nothing (no header or data)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300055"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to send data to the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300056"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failed to receive data from the peer."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300058"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local SSL certificate error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300059"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The specified SSL cipher cannot be used."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300060"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid SSL peer certificate or SSH remote key."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300061"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid HTTP encoding format."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300063"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum file size exceeded."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300070"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote disk full."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300073"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file already exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300077"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The SSL CA certificate does not exist or is inaccessible."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300078"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote file not found."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300094"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authentication error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300997"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleartext traffic not permitted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300998"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It is not allowed to access this domain."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2300999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { http } from '@kit.NetworkKit';\n\nclass Header {\n  public contentType: string;\n\n  constructor(contentType: string) {\n    this.contentType = contentType;\n  }\n}\n\nlet httpRequest = http.createHttp();\nlet promise = httpRequest.requestInStream(\"EXAMPLE_URL\", {\n  method: http.RequestMethod.GET,\n  connectTimeout: 60000,\n  readTimeout: 60000,\n  header: new Header('application/json')\n});\npromise.then((data: number) => {\n  console.info(\"requestInStream OK!\" + data);\n}).catch((err: Error) => {\n  console.error(\"requestInStream ERROR : err = \" + JSON.stringify(err));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "onheaderreceivedeprecated",
      children: "on(\"headerReceive\")(deprecated)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["on(type: \"headerReceive\", callback: AsyncCallback", (0,jsx_runtime.jsxs)(_components.object, {
        children: ["): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "订阅HTTP Response Header 事件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(487768)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["从API version 6开始支持，从API version 8开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
            href: "#onheadersreceive8",
            children: "on(\"headersReceive\")"
          }), "替代。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "系统能力"
            })
          }), "：SystemCapability.Communication.NetStack"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "参数："
            })
          })
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "参数名"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "类型"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "必填"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "说明"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "type"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "string"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "订阅的事件类型，'headerReceive'。"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "callback"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "AsyncCallback<Object>"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "是"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "回调函数。当订阅成功，error为undefined，data为获取到HTTP响应头；否则为错误对象。"
              })]
            })]
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "示例："
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"headerReceive\", (data: BusinessError) => {\n  console.error(\"error:\" + JSON.stringify(data));\n});\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "offheaderreceivedeprecated",
          children: "off(\"headerReceive\")(deprecated)"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["off(type: \"headerReceive\", callback?: AsyncCallback", (0,jsx_runtime.jsxs)(_components.object, {
            children: ["): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "取消订阅HTTP Response Header事件。"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(879991)/* ["default"] */.A) + "",
                width: "102",
                height: "38"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["从API version 6开始支持，从API version 8开始废弃，建议使用", (0,jsx_runtime.jsx)(_components.a, {
                href: "#offheadersreceive8",
                children: "off(\"headersReceive\")"
              }), "替代。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "系统能力"
                })
              }), "：SystemCapability.Communication.NetStack"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "参数："
                })
              })
            }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "参数名"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "类型"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "必填"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "说明"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "type"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "string"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "是"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "取消订阅的事件类型，'headerReceive'。"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "callback"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "AsyncCallback<Object>"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "否"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。"
                  })]
                })]
              })]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "示例："
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.off(\"headerReceive\");\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
              id: "onheadersreceive8",
              children: "on(\"headersReceive\")8+"
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["on(type: \"headersReceive\", callback: Callback", (0,jsx_runtime.jsxs)(_components.object, {
                children: ["): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "订阅HTTP Response Header 事件。"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "元服务API："
                    })
                  }), " 从API version 11开始，该接口支持在元服务中使用。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "系统能力"
                    })
                  }), "：SystemCapability.Communication.NetStack"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "参数："
                    })
                  })
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "参数名"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "类型"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "必填"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "说明"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "type"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "string"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "订阅的事件类型：'headersReceive'。"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "callback"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Callback<Object>"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "是"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "回调函数，返回HTTP响应头对象。"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "示例："
                    })
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"headersReceive\", (header: Object) => {\n  console.info(\"header: \" + JSON.stringify(header));\n});\nhttpRequest.off(\"headersReceive\");\n"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "offheadersreceive8",
                  children: "off(\"headersReceive\")8+"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["off(type: \"headersReceive\", callback?: Callback", (0,jsx_runtime.jsxs)(_components.object, {
                    children: ["): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "取消订阅HTTP Response Header 事件。"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "元服务API："
                        })
                      }), " 从API version 11开始，该接口支持在元服务中使用。"]
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "系统能力"
                        })
                      }), "：SystemCapability.Communication.NetStack"]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "参数："
                        })
                      })
                    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                      children: [(0,jsx_runtime.jsx)(_components.thead, {
                        children: (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.th, {
                            children: "参数名"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "类型"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "必填"
                          }), (0,jsx_runtime.jsx)(_components.th, {
                            children: "说明"
                          })]
                        })
                      }), (0,jsx_runtime.jsxs)(_components.tbody, {
                        children: [(0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "type"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "string"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "是"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "取消订阅的事件类型：'headersReceive'。"
                          })]
                        }), (0,jsx_runtime.jsxs)(_components.tr, {
                          children: [(0,jsx_runtime.jsx)(_components.td, {
                            children: "callback"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "Callback<Object>"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "否"
                          }), (0,jsx_runtime.jsx)(_components.td, {
                            children: "回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。"
                          })]
                        })]
                      })]
                    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: (0,jsx_runtime.jsx)(_components.strong, {
                          children: "示例："
                        })
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"headersReceive\", (header: Object) => {\n  console.info(\"header: \" + JSON.stringify(header));\n});\nhttpRequest.off(\"headersReceive\");\n"
                      })
                    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                      id: "onceheadersreceive8",
                      children: "once(\"headersReceive\")8+"
                    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: ["once(type: \"headersReceive\", callback: Callback", (0,jsx_runtime.jsxs)(_components.object, {
                        children: ["): void", (0,jsx_runtime.jsx)(_components.p, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "订阅HTTP Response Header 事件，只能触发一次。触发之后，订阅器就会被移除。使用callback方式作为异步方法。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "订阅的事件类型：'headersReceive'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Callback<Object>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数。返回HTTP响应头对象。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.once(\"headersReceive\", (header: Object) => {\n  console.info(\"header: \" + JSON.stringify(header));\n});\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "ondatareceive10",
                          children: "on(\"dataReceive\")10+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "on(type: \"dataReceive\", callback: Callback<ArrayBuffer>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "订阅HTTP流式响应数据接收事件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "订阅的事件类型，'dataReceive'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Callback<ArrayBuffer>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数。当订阅成功时，error为undefined，data为获取到的HTTP流式数据接收数据，类型为ArrayBuffer；否则为错误对象。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"dataReceive\", (data: ArrayBuffer) => {\n  console.info(\"dataReceive length: \" + JSON.stringify(data.byteLength));\n});\nhttpRequest.off(\"dataReceive\");\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "offdatareceive10",
                          children: "off(\"dataReceive\")10+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "off(type: \"dataReceive\", callback?: Callback<ArrayBuffer>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "取消订阅HTTP流式响应数据接收事件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "取消订阅的事件类型：'dataReceive'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Callback<ArrayBuffer>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"dataReceive\", (data: ArrayBuffer) => {\n  console.info(\"dataReceive length: \" + JSON.stringify(data.byteLength));\n});\nhttpRequest.off(\"dataReceive\");\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "ondataend10",
                          children: "on(\"dataEnd\")10+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "on(type: \"dataEnd\", callback: Callback<void>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "订阅HTTP流式响应数据接收完毕事件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "订阅的事件类型，'dataEnd'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Callback<void>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数。当订阅成功时，err为undefined，否则为错误对象。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"dataEnd\", () => {\n  console.info(\"Receive dataEnd !\");\n});\nhttpRequest.off(\"dataEnd\");\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "offdataend10",
                          children: "off(\"dataEnd\")10+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "off(type: \"dataEnd\", callback?: Callback<void>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "取消订阅HTTP流式响应数据接收完毕事件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "取消订阅的事件类型：'dataEnd'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Callback<void>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"dataEnd\", () => {\n  console.info(\"Receive dataEnd !\");\n});\nhttpRequest.off(\"dataEnd\");\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "ondatareceiveprogress10",
                          children: "on('dataReceiveProgress')10+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "on(type: 'dataReceiveProgress', callback: Callback<DataReceiveProgressInfo>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "订阅HTTP流式响应数据接收进度事件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "订阅的事件类型，'dataReceiveProgress'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#datareceiveprogressinfo11",
                                  children: "DataReceiveProgressInfo"
                                }), ">"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["回调函数。当订阅成功时，回调内容是", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#datareceiveprogressinfo11",
                                  children: "DataReceiveProgressInfo"
                                }), "，订阅失败时为undefined。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"dataReceiveProgress\", (data: http.DataReceiveProgressInfo) => {\n  console.info(\"dataReceiveProgress:\" + JSON.stringify(data));\n});\nhttpRequest.off(\"dataReceiveProgress\");\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "offdatareceiveprogress10",
                          children: "off('dataReceiveProgress')10+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "off(type: 'dataReceiveProgress', callback?: Callback<DataReceiveProgressInfo>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "取消订阅HTTP流式响应数据接收进度事件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "取消订阅的事件类型：'dataReceiveProgress'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#datareceiveprogressinfo11",
                                  children: "DataReceiveProgressInfo"
                                }), ">"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数。 可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"dataReceiveProgress\", (data: http.DataReceiveProgressInfo) => {\n  console.info(\"dataReceiveProgress:\" + JSON.stringify(data));\n});\nhttpRequest.off(\"dataReceiveProgress\");\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "ondatasendprogress11",
                          children: "on('dataSendProgress')11+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "on(type: 'dataSendProgress', callback: Callback<DataSendProgressInfo>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "订阅HTTP网络请求数据发送进度事件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "订阅的事件类型，'dataSendProgress'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#datasendprogressinfo11",
                                  children: "DataSendProgressInfo"
                                }), ">"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["回调函数。当订阅成功时，回调内容是", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#datasendprogressinfo11",
                                  children: "DataSendProgressInfo"
                                }), "，订阅失败时为undefined。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"dataSendProgress\", (data: http.DataSendProgressInfo) => {\n  console.info(\"dataSendProgress:\" + JSON.stringify(data));\n});\nhttpRequest.off(\"dataSendProgress\");\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "offdatasendprogress11",
                          children: "off('dataSendProgress')11+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "off(type: 'dataSendProgress', callback?: Callback<DataSendProgressInfo>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "取消订阅HTTP网络请求数据发送进度事件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "type"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "取消订阅的事件类型：'dataSendProgress'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["Callback<", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#datasendprogressinfo11",
                                  children: "DataSendProgressInfo"
                                }), ">"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数。可以指定传入on中的callback取消对应的订阅，也可以不指定callback清空所有订阅。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.on(\"dataSendProgress\", (data: http.DataSendProgressInfo) => {\n  console.info(\"dataSendProgress:\" + JSON.stringify(data));\n});\nhttpRequest.off(\"dataSendProgress\");\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httprequestoptions",
                          children: "HttpRequestOptions"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "发起HTTP请求时，可选配置信息。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "method"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#requestmethod",
                                  children: "RequestMethod"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["请求方式，默认为GET。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "extraData"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Object"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "ArrayBuffer"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "expectDataType9+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httpdatatype9",
                                  children: "HttpDataType"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["指定返回数据的类型，默认无此字段。如果设置了此参数，系统将优先返回指定的类型。当指定其类型为Object时，最大长度为65536字符数。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "usingCache9+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "boolean"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["是否使用缓存，true表示请求时优先读取缓存，false表示不使用缓存；默认为true，请求时优先读取缓存。缓存跟随当前进程生效，新缓存会替换旧缓存。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "priority9+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["HTTP/HTTPS请求并发优先级，值越大优先级越高，范围[1,1000]，默认为1。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "header"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Object"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["HTTP请求头字段。当请求方式为\"POST\" \"PUT\" \"DELETE\" 或者\"\"时，默认{'content-Type': 'application/json'}， 否则默认{'content-Type': 'application/x-www-form-urlencoded'}。  如果head中包含number类型的字段，最大支持int64的整数。  header字段支持JSON格式如 ", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-http/js-apis-http#%E5%AE%8C%E6%95%B4%E7%A4%BA%E4%BE%8B",
                                  children: "完整示例"
                                }), " 和Record<string, string>格式输入。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "readTimeout"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["读取超时时间。单位为毫秒（ms），默认为60000ms。传入值需为uint32_t范围内的整数。  设置为0表示不会出现超时情况。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "connectTimeout"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["连接超时时间。单位为毫秒（ms），默认为60000ms。传入值需为uint32_t范围内的整数。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "usingProtocol9+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httpprotocol9",
                                  children: "HttpProtocol"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["使用协议。默认值由系统自动指定。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "usingProxy10+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "boolean"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/system-network-api/network-api/network-api-arkts/js-apis-net-connection/js-apis-net-connection#httpproxy10",
                                  children: "HttpProxy"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "caPath10+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["如果设置了此参数且证书有效，系统将使用用户指定的CA证书和系统预设的CA证书；否则仅使用系统预设的CA证书。CA证书路径为沙箱映射路径（开发者可通过UIAbilityContext提供的能力获取应用沙箱路径）。目前仅支持后缀名为.pem的文本格式证书。  系统预设CA证书位置：/etc/ssl/certs/cacert.pem。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "caData20+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["如果设置了此参数且证书有效，系统将使用用户指定的CA证书和系统预设的CA证书；否则仅使用系统预设的CA证书。如果同时设置了caPath和caData，caData将被系统忽略。目前仅支持传入.pem格式的证书内容，最大长度为8000字节。仅支持传入单证书，不支持证书链传入。  系统预设CA证书位置：/etc/ssl/certs/cacert.pem。证书路径为沙箱映射路径（开发者可通过UIAbilityContext提供的能力获取应用沙箱路径）。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 20开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "resumeFrom11+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "用于设置下载起始位置，该参数只能用于GET方法，不能用于其他。HTTP标准（RFC 7233第3.1节）允许服务器忽略范围请求。  - 使用HTTP PUT时，不能使用该选项，因为该选项可能与其他选项冲突。  - 取值范围是：[1，4294967296（4GB）]，超出范围则不生效。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "resumeTo11+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "用于设置下载结束位置，该参数只能用于GET方法，不能用于其他。HTTP标准（RFC 7233第3.1节）允许服务器忽略范围请求。  - 使用HTTP PUT时，不能使用该选项，因为该选项可能与其他选项冲突。  - 取值范围是：[1，4294967296（4GB）]，超出范围则不生效。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "clientCert11+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#clientcert11",
                                  children: "ClientCert"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "支持传输客户端证书。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "dnsOverHttps11+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "设置使用HTTPS协议的服务器进行DNS解析。  - 参数必须根据以下格式进行URL编码：\"https:// host:port/path\"。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "dnsServers11+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Array<string>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "设置指定的DNS服务器进行DNS解析。  - 最多可以设置3个DNS解析服务器。如果有3个以上，只取前3个。  - 服务器必须是IPV4或者IPV6地址。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "maxLimit11+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "响应消息的最大字节限制。  默认值为5*1024*1024，以字节为单位。最大值为100*1024*1024，以字节为单位。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "multiFormDataList11+"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["Array<", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#multiformdata11",
                                  children: "MultiFormData"
                                }), ">"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "当'content-Type'为'multipart/form-data'时，则上传该字段定义的数据字段表单列表。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "certificatePinning12+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#certificatepinning12",
                                  children: "CertificatePinning"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "CertificatePinning[]"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "addressFamily15+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#addressfamily15",
                                  children: "AddressFamily"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "支持解析目标域名时限定地址类型。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "remoteValidation18+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#remotevalidation18",
                                  children: "RemoteValidation"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["证书颁发机构（CA），用于验证远程服务器的身份。如果未设置此字段，系统CA将用于验证远程服务器的标识。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 18开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "tlsOptions18+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsoptions18",
                                  children: "TlsOptions"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["TLS配置。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 18开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "serverAuthentication18+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#serverauthentication18",
                                  children: "ServerAuthentication"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["安全连接期间的服务器身份验证配置。默认不认证。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 18开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "sslType20+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#ssltype20",
                                  children: "SslType"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["使用安全通信协议TLS（默认）或TLCP。如果使用TLCP，相关的选项（如caPath、clientCert和clientEncCert）必须赋有效值。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 20开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "clientEncCert20+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#clientcert11",
                                  children: "ClientCert"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["支持应用程序传入客户端证书，使服务器能够进行验证客户端的加密身份。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 20开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "customMethod23+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "支持自定义请求方法，例如实现WebDAV扩展协议，当与method同时配置时，customMethod优先级更高。  - 默认值为空字符串，最大长度128个字符，超出则不生效。  - 当customMethod符合WebDAV扩展协议请求方式，但服务器不支持时，本次请求的服务器响应码通常为405或501（实际结果与服务器具体行为有关）。  - 当customMethod不符合WebDAV扩展协议请求方式时，本次请求的服务器响应码通常为400或405（实际结果与服务器具体行为有关）。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "maxRedirects23+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "支持针对HttpRequest指定最大跳转次数。  - 默认值为30次。  - 取值范围是：[0，2147483647]，设置0即为关闭重定向，当服务器的重定向次数超过设置的最大重定向次数时会返回错误码2300047。超出此范围该配置不生效，配置默认值30。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "sniHostName23+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "支持客户端通过配置SNI（Server Name Indication，服务器名称指示）在TLS握手阶段向服务器声明目标域名，使服务器能够根据域名选择对应的SSL/TLS证书进行加密通信。  - 默认值为空字符串，sniHostName参数长度上限为255个字符。若超出长度限制或设置为空字符串，该设置将不会生效。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "pathPreference23+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#pathpreference23",
                                  children: "PathPreference"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "支持HTTP请求指定特定激活的网络。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "requestmethod",
                          children: "RequestMethod"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "HTTP 请求方法。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "值"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "OPTIONS"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "\"OPTIONS\""
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "OPTIONS方法描述了目标资源的通信选项。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "GET"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "\"GET\""
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "GET方法请求指定资源的表示。使用GET的请求应该只检索数据，不应该包含请求内容。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "HEAD"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "\"HEAD\""
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "HEAD方法请求与GET请求相同的响应，但没有响应主体。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "POST"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "\"POST\""
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "POST方法将实体提交给指定的资源，通常会导致服务器上的状态更改。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "PUT"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "\"PUT\""
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "PUT方法将目标资源的所有当前表示替换为请求内容。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "DELETE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "\"DELETE\""
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "DELETE方法用于删除指定的资源。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TRACE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "\"TRACE\""
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "TRACE方法沿到达目标资源的路径执行消息环回测试。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "CONNECT"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "\"CONNECT\""
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "CONNECT方法建立到由目标资源标识的服务器的隧道。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "responsecode",
                          children: "ResponseCode"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "发起请求返回的响应码。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "值"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "OK"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "200"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["请求成功。用于GET与POST请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "CREATED"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "201"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["已创建。请求成功并已创建新资源。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "ACCEPTED"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "202"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["已接受。请求已被接受，但未处理完成。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "NOT_AUTHORITATIVE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "203"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["非授权信息。请求成功。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "NO_CONTENT"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "204"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["无内容。服务器成功处理，但未返回内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "RESET"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "205"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["重置内容。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "PARTIAL"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "206"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["部分内容。服务器成功处理了部分GET请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "MULT_CHOICE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "300"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["多种选择。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "MOVED_PERM"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "301"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "MOVED_TEMP"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "302"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["临时移动。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "SEE_OTHER"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "303"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["查看其它地址。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "NOT_MODIFIED"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "304"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["未修改。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "USE_PROXY"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "305"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["使用代理。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "BAD_REQUEST"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "400"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["客户端请求的语法错误，服务器无法理解。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "UNAUTHORIZED"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "401"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["请求需要用户的身份认证。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "PAYMENT_REQUIRED"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "402"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["保留字段，将来使用。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "FORBIDDEN"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "403"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器理解请求客户端的请求，但是拒绝执行此请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "NOT_FOUND"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "404"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器无法根据客户端的请求找到资源(网页)。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "BAD_METHOD"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "405"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["客户端请求中的方法被禁止。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "NOT_ACCEPTABLE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "406"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器无法根据客户端请求的内容特性完成请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "PROXY_AUTH"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "407"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["请求需要代理的身份认证。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "CLIENT_TIMEOUT"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "408"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["请求超时。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "CONFLICT"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "409"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器完成客户端的PUT请求时可能返回此代码，服务器处理请求时发生了冲突。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "GONE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "410"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["客户端请求的资源已经不存在。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "LENGTH_REQUIRED"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "411"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器无法处理客户端发送的不带Content-Length的请求信息。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "PRECON_FAILED"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "412"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["客户端请求信息的先决条件错误。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "ENTITY_TOO_LARGE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "413"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["由于请求的实体过大，服务器无法处理，因此拒绝请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "REQ_TOO_LONG"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "414"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["请求的URI过长(URI通常为网址)，服务器无法处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "UNSUPPORTED_TYPE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "415"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器无法处理请求的格式。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "RANGE_NOT_SATISFIABLE12+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "416"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["请求范围不符合要求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 12开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "INTERNAL_ERROR"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "500"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器内部错误，无法完成请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "NOT_IMPLEMENTED"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "501"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器不支持请求的功能，无法完成请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "BAD_GATEWAY"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "502"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["充当网关或代理的服务器，从远端服务器接收到了一个无效的请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "UNAVAILABLE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "503"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["由于超载或系统维护，服务器暂时无法处理客户端的请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "GATEWAY_TIMEOUT"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "504"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["充当网关或代理的服务器，未及时从远端服务器获取请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "VERSION"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "505"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器不支持客户端请求中使用的HTTP协议版本。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httpresponse",
                          children: "HttpResponse"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "request方法回调函数的返回值类型。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "result"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Object"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "ArrayBuffer"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "resultType9+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httpdatatype9",
                                  children: "HttpDataType"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["返回值类型。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "responseCode"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#responsecode",
                                  children: "ResponseCode"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "header"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Object"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["发起HTTP请求返回来的响应头。当前返回的是JSON格式字符串，如需具体字段内容，需开发者自行解析。常见字段及解析方式如下：  - content-type：header['content-type']。  - status-line：header['status-line']。  - date：header.date/header['date']。  - server：header.server/header['server']。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "cookies8+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["服务器返回的原始cookies。开发者可自行处理。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "performanceTiming11+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#performancetiming11",
                                  children: "PerformanceTiming"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "HTTP请求的各个阶段的耗时。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "clientcert11",
                          children: "ClientCert11+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "客户端证书类型。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "certPath"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "证书路径。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "certType"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#certtype11",
                                  children: "CertType"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "证书类型，默认是PEM。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "keyPath"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "证书密钥的路径。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "keyPassword"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "证书密钥的密码。默认值为空字符串。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "performancetiming11",
                          children: "PerformanceTiming11+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "性能打点(单位：毫秒)。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "dnsTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求到DNS解析完成耗时。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "tcpTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求到TCP连接完成耗时。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "tlsTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求到TLS连接完成耗时。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "firstSendTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求到开始发送第一个字节的耗时。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "firstReceiveTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求到接收第一个字节的耗时。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "totalFinishTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求到完成请求的耗时。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "redirectTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求到完成所有重定向步骤的耗时。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "responseHeaderTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求到header解析完成的耗时。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "responseBodyTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求到body解析完成的耗时。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "totalTiming"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["从", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#request",
                                  children: "request"
                                }), "请求回调到应用程序的耗时。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "datareceiveprogressinfo11",
                          children: "DataReceiveProgressInfo11+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "数据接收信息。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "receiveSize"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "已接收的数据量（单位：字节）。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "totalSize"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "总共要接收的数据量（单位：字节）。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "datasendprogressinfo11",
                          children: "DataSendProgressInfo11+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "数据发送信息。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 15开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "属性",
                          children: "属性"
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "sendSize"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "每次发送的数据量(单位：字节)。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "totalSize"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "总共要发送的数据量(单位：字节)。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "multiformdata11",
                          children: "MultiFormData11+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "多部分表单数据的类型。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "name"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "数据名称。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "contentType"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "数据类型，如'text/plain'，'image/png', 'image/jpeg', 'audio/mpeg', 'video/mp4'等。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "remoteFileName"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["上传到服务器保存为文件的名称。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "说明"
                                  })
                                }), "：指定该字段后，请求头中会添加filename字段，表示上传到服务器文件的名称。  （1）当上传数据为文件时，若通过data字段指定文件内容，通常需要设置remoteFileName字段，用以指定上传到服务器文件的名称（实际结果与服务器具体行为有关）；若通过filePath字段指定文件路径，请求头中会自动添加filename字段，其默认值为filePath中的文件名称，如需特殊指定，也可通过本字段对filename重新设置。  （2）当上传数据为二进制格式时，则必须设置remoteFileName字段。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "data"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Object"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "ArrayBuffer"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "filePath"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["此参数将文件路径指向的文件内容设置为表单数据，如果未指定data内容，则必须设置filePath。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "说明"
                                  })
                                }), "：需传入文件管理模块支持的格式，可以通过文件管理的", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "/ref/core-file-api/core-file-arkts/js-apis-file-fs/js-apis-file-fs#fileioaccess",
                                  children: "access"
                                }), "接口，验证文件是否存在且可访问。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httpcreatehttpresponsecache9",
                          children: "http.createHttpResponseCache9+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "createHttpResponseCache(cacheSize?: number): HttpResponseCache"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["创建一个HttpResponseCache对象，可用于存储HTTP请求的响应数据。对象中可调用", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#flush9",
                            children: "flush"
                          }), "与", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#delete9",
                            children: "delete"
                          }), "方法，cacheSize指定缓存大小。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "cacheSize"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "number"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "缓存大小。最大为10*1024*1024（10MB），默认最大。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httpresponsecache9",
                                  children: "HttpResponseCache"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "返回一个存储HTTP访问请求响应的对象。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet httpResponseCache = http.createHttpResponseCache();\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httpresponsecache9",
                          children: "HttpResponseCache9+"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["存储HTTP访问请求响应的对象。在调用HttpResponseCache的方法前，需要先通过", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#httpcreatehttpresponsecache9",
                            children: "createHttpResponseCache()"
                          }), "创建一个任务。"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "响应头中的相应关键字使用"
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "Cache-Control"
                              })
                            }), "：用于指定缓存策略，如no-cache, no-store, max-age, public, private等。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "Expires"
                              })
                            }), "：指定资源的过期时间，格式为GMT时间。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "ETag"
                              })
                            }), "：用于资源版本标识，客户端可以使用If-None-Match请求头来验证资源是否已更改。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "Last-Modified"
                              })
                            }), "：指定资源最后修改时间，客户端可以使用If-Modified-Since请求头来验证资源是否已更改。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "Vary"
                              })
                            }), "：指定哪些请求头的值会影响缓存的响应，用于区分不同的缓存版本。"]
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "使用这些关键字时，服务器端需要正确配置响应头，客户端则需要根据这些响应头来决定是否使用缓存的资源，以及如何验证资源是否是最新的。正确的缓存策略可以显著提高应用的性能和用户体验。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "如何设置Cache-Control头"
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "Cache-Control为通用报头，但通常是在服务器端进行的，允许定义一个响应资源应该何时、如何被缓存以及缓存多长时间。以下是一些常用的Cache-Control指令及其含义："
                        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "no-cache"
                              })
                            }), "：表示在使用缓存前，必须先去源服务器校验资源的有效性。如果资源未变更，则响应状态码为304(Not Modified)，不发送资源内容，使用缓存中的资源。如果资源已经过期，则响应状态码为200(OK)，并发送资源内容。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "no-store"
                              })
                            }), "：表示不允许缓存资源，每次请求都必须从服务器获取资源。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "max-age"
                              })
                            }), "：指定缓存的最大时间(以秒为单位)。例如，Cache-Control: max-age=3600表示缓存的有效期为1小时。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "public"
                              })
                            }), "：表明响应可以被任何对象(包括：发送请求的客户端，代理服务器等)缓存。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "private"
                              })
                            }), "：表明响应只能被单个用户缓存，不能作为共享缓存(即代理服务器不能缓存)。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "must-revalidate"
                              })
                            }), "：表示必须在使用缓存前验证旧资源的状态，并且在缓存过期后，需要重新验证资源。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "no-transform"
                              })
                            }), "：表示不允许代理服务器修改响应内容。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "proxy-revalidate"
                              })
                            }), "：与must-revalidate类似，但仅适用于共享缓存。"]
                          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                            children: [(0,jsx_runtime.jsx)(_components.strong, {
                              children: (0,jsx_runtime.jsx)(_components.strong, {
                                children: "s-maxage"
                              })
                            }), "：类似于max-age，但仅适用于共享缓存。"]
                          }), "\n"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "flush9",
                          children: "flush9+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "flush(callback: AsyncCallback<void>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "将缓存中的数据写入文件系统，以便在下一个HTTP请求中访问所有缓存数据，使用callback方式作为异步方法。缓存数据包括：响应头(header)、响应体(result)、cookies、请求时间(requestTime)和响应时间(responseTime)。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "AsyncCallback<void>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数。返回写入结果。当写入成功时，err为undefined，否则为错误对象。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet httpResponseCache = http.createHttpResponseCache();\nlet httpRequest = http.createHttp();\nhttpRequest.request(\"EXAMPLE_URL\", (err: BusinessError, data: http.HttpResponse) => {\n  if (!err) {\n    httpResponseCache.flush((err: BusinessError) => {\n      if (err) {\n        console.error('flush fail');\n      }\n      console.info('flush success');\n    });\n    httpRequest.destroy();\n  } else {\n    console.error('error:' + JSON.stringify(err));\n    // 当该请求使用完毕时，开发者务必调用destroy方法释放资源，避免出现内存泄漏。\n    httpRequest.destroy();\n  }\n});\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "flush9-1",
                          children: "flush9+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "flush(): Promise<void>"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "将缓存中的数据写入文件系统，以便在下一个HTTP请求中访问所有缓存数据，使用Promise方式作为异步方法。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "Promise<void>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Promise对象。无返回结果的Promise对象。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet httpRequest = http.createHttp();\nlet httpResponseCache = http.createHttpResponseCache();\nlet promise = httpRequest.request(\"EXAMPLE_URL\");\n\npromise.then((data: http.HttpResponse) => {\n  httpResponseCache.flush().then(() => {\n    console.error('flush success');\n  }).catch((err: BusinessError) => {\n    console.error('flush fail');\n  });\n}).catch((err: Error) => {\n  console.error('error:' + JSON.stringify(err));\n});\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "delete9",
                          children: "delete9+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "delete(callback: AsyncCallback<void>): void"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "禁用缓存并删除其中的数据，使用callback方式作为异步方法。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "callback"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "AsyncCallback<void>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "回调函数。当删除成功时，err为undefined，否则为错误对象。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.request(\"EXAMPLE_URL\").then(data => {\n  const httpResponseCache = http.createHttpResponseCache();\n  httpResponseCache.delete((err: BusinessError) => {\n    try {\n      if (err) {\n        console.error('fail: ' + err);\n      } else {\n        console.info('success');\n      }\n    } catch (err) {\n      console.error('error: ' + err);\n    }\n  });\n  httpRequest.destroy();\n}).catch((error: BusinessError) => {\n  console.error(\"errcode\" + JSON.stringify(error));\n});\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "delete9-1",
                          children: "delete9+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "delete(): Promise<void>"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "禁用缓存并删除其中的数据，使用Promise方式作为异步方法。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "Promise<void>"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Promise对象。无返回结果的Promise对象。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nlet httpRequest = http.createHttp();\nhttpRequest.request(\"EXAMPLE_URL\").then(data => {\n  const httpResponseCache = http.createHttpResponseCache();\n  httpResponseCache.delete().then(() => {\n    console.info(\"success\");\n  }).catch((err: BusinessError) => {\n    console.error(\"fail\");\n  });\n  httpRequest.destroy();\n}).catch((error: BusinessError) => {\n  console.error(\"errcode\" + JSON.stringify(error));\n});\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httpdatatype9",
                          children: "HttpDataType9+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "HTTP的数据类型。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "值"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "STRING"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "0"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "字符串类型。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "OBJECT"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "1"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "对象类型。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "ARRAY_BUFFER"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "2"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "二进制数组类型。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httpprotocol9",
                          children: "HttpProtocol9+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "HTTP协议版本。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "值"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "HTTP1_1"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "0"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["协议HTTP1.1。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "HTTP2"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "1"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["协议HTTP2。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "元服务API："
                                  })
                                }), " 从API version 11开始，该接口支持在元服务中使用。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "HTTP311+"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "2"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["协议HTTP3，若系统或服务器不支持，则使用低版本的HTTP协议请求。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "注意："
                                  })
                                }), " 仅对HTTPS的URL生效，HTTP则会请求失败。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "certtype11",
                          children: "CertType11+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "枚举，证书类型。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "值"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "PEM"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "PEM"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "证书类型PEM。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "DER"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "DER"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "证书类型DER。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "P12"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "P12"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "证书类型P12。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "certificatepinning12",
                          children: "CertificatePinning12+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "由应用配置的证书。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "publicKeyHash"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "字符串类型的证书PIN码。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "hashAlgorithm"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "'SHA-256'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "加密算法，当前仅支持该算法。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httpproxy10",
                          children: "HttpProxy10+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type HttpProxy = connection.HttpProxy"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "网络代理配置信息。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 11开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "connection.HttpProxy"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "网络代理配置信息。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "addressfamily15",
                          children: "AddressFamily15+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "枚举，解析目标域名时限定的地址类型。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "值"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "DEFAULT"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "CURL_IPRESOLVE_WHATEVER"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "设置此选项后，系统将自行选择目标域名的IPv4地址或IPv6地址。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "ONLY_V4"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "CURL_IPRESOLVE_V4"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "设置此选项后，系统仅解析目标域名的IPv4地址，忽略IPv6地址。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "ONLY_V6"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "CURL_IPRESOLVE_V6"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "设置此选项后，系统仅解析目标域名的IPv6地址，忽略IPv4地址。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "credential18",
                          children: "Credential18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "会话中服务器身份验证设置所使用的身份验证凭据，包括用户名和密码。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "username"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "用于身份验证的用户名。默认值为' '。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "password"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "用于身份验证的密码。默认值为' '。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "serverauthentication18",
                          children: "ServerAuthentication18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "HTTP服务器身份验证。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "credential"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#credential18",
                                  children: "Credential"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "服务器的凭证。默认值为undefined。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "authenticationType"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#authenticationtype18",
                                  children: "AuthenticationType"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "服务器的认证类型。如果没有设置，需与服务器协商。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsconfig18",
                          children: "TlsConfig18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "TLS加密版本及套件配置。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "tlsVersionMin"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsversion18",
                                  children: "TlsVersion"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS最低版本号。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "tlsVersionMax"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsversion18",
                                  children: "TlsVersion"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS最高版本号。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "cipherSuites"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: [(0,jsx_runtime.jsx)(_components.a, {
                                  href: "#ciphersuite18",
                                  children: "CipherSuite"
                                }), "[]"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["声明加密套件类型的数组。如果没有设置，默认携带全部支持的加密套件类型，加密套件类型参考", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv13specificciphersuite18",
                                  children: "TlsV13SpecificCipherSuite"
                                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv12specificciphersuite18",
                                  children: "TlsV12SpecificCipherSuite"
                                }), "、", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv10specificciphersuite18",
                                  children: "TlsV10SpecificCipherSuite"
                                }), "。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsversion18",
                          children: "TlsVersion18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "枚举，TLS版本号。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "值"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS_V_1_0"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "4"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS版本号1.0。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS_V_1_1"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "5"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS版本号1.1。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS_V_1_2"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "6"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS版本号1.2。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS_V_1_3"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "7"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "TLS版本号1.3。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsoptions18",
                          children: "TlsOptions18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TlsOptions = 'system' | TlsConfig"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "TLS配置。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'system'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示使用系统的TLS版本，是未进行TLS设置的默认值，值固定为'system'字符串。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TlsConfig"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示使用自定义的TLS版本号和加密套件。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "remotevalidation18",
                          children: "RemoteValidation18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type RemoteValidation = 'system' | 'skip'"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "验证远程服务器身份的方式。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'system'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示使用系统CA验证远端服务器身份，值固定为'system'字符串，是未配置时的默认值。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'skip'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示跳过验证远端服务器身份流程，值固定为'skip'字符串。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "authenticationtype18",
                          children: "AuthenticationType18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type AuthenticationType = 'basic' | 'ntlm' | 'digest'"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "在会话中的服务器身份验证时可以设置使用不同的身份验证机制。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'basic'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示使用基本认证方式，值固定为'basic'字符串。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'ntlm'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示使用ntlm认证方式，值固定为'ntlm'字符串。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'digest'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示使用摘要认证方式，值固定为'digest'字符串。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "ciphersuite18",
                          children: "CipherSuite18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type CipherSuite = TlsV13CipherSuite"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "加密套件声明函数。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TlsV13CipherSuite"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["表示值的类型为", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv13ciphersuite18",
                                  children: "TlsV13CipherSuite"
                                }), "。"]
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsv13ciphersuite18",
                          children: "TlsV13CipherSuite18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TlsV13CipherSuite = TlsV12CipherSuite | TlsV13SpecificCipherSuite"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "TLS1.3的加密套件声明函数，支持TLS1.3版本，兼容TLS1.2版本。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TlsV12CipherSuite"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["表示值的类型为", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv11ciphersuite18",
                                  children: "TlsV11CipherSuite"
                                }), "。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TlsV13SpecificCipherSuite"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["表示值的类型为", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv13specificciphersuite18",
                                  children: "TlsV13SpecificCipherSuite"
                                }), "。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsv12ciphersuite18",
                          children: "TlsV12CipherSuite18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TlsV12CipherSuite = TlsV11CipherSuite | TlsV12SpecificCipherSuite"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "TLS1.2的加密套件声明函数，支持TLS1.2版本，兼容TLS1.1版本。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TlsV11CipherSuite"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["表示值的类型为", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv11ciphersuite18",
                                  children: "TlsV11CipherSuite"
                                }), "。"]
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TlsV12SpecificCipherSuite"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["表示值的类型为", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv12specificciphersuite18",
                                  children: "TlsV12SpecificCipherSuite"
                                }), "。"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsv11ciphersuite18",
                          children: "TlsV11CipherSuite18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TlsV11CipherSuite = TlsV10CipherSuite"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "TLS1.1的加密套件声明函数，与TLS1.0的加密套件相同。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TlsV10CipherSuite"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["表示值的类型为", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv10ciphersuite18",
                                  children: "TlsV10CipherSuite"
                                }), "。"]
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsv10ciphersuite18",
                          children: "TlsV10CipherSuite18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TlsV10CipherSuite = TlsV10SpecificCipherSuite"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "TLS1.0的加密套件声明函数。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "TlsV10SpecificCipherSuite"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["表示值的类型为", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#tlsv10specificciphersuite18",
                                  children: "TlsV10SpecificCipherSuite"
                                }), "。"]
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsv13specificciphersuite18",
                          children: "TlsV13SpecificCipherSuite18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TlsV13SpecificCipherSuite = 'TLS_AES_128_GCM_SHA256' | 'TLS_AES_256_GCM_SHA384' | 'TLS_CHACHA20_POLY1305_SHA256'"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "TLS1.3及以上版本支持的加密套件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_AES_128_GCM_SHA256'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_AES_128_GCM_SHA256'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_AES_256_GCM_SHA384'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_AES_256_GCM_SHA384'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_CHACHA20_POLY1305_SHA256'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_CHACHA20_POLY1305_SHA256'。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsv12specificciphersuite18",
                          children: "TlsV12SpecificCipherSuite18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TlsV12SpecificCipherSuite = 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256' | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256' |"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384' | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384' |"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256' | 'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256' |"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "'TLS_RSA_WITH_AES_128_GCM_SHA256' | 'TLS_RSA_WITH_AES_256_GCM_SHA384'"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "TLS1.2及以上版本支持的加密套件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_RSA_WITH_AES_128_GCM_SHA256'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_RSA_WITH_AES_128_GCM_SHA256'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_RSA_WITH_AES_256_GCM_SHA384'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_RSA_WITH_AES_256_GCM_SHA384'。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "tlsv10specificciphersuite18",
                          children: "TlsV10SpecificCipherSuite18+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type TlsV10SpecificCipherSuite = 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA' |"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA' | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_AES_128_CBC_SHA' |"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "'TLS_RSA_WITH_AES_256_CBC_SHA' | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA'"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "TLS1.0及以上版本支持的加密套件。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 18开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_RSA_WITH_AES_128_CBC_SHA'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_RSA_WITH_AES_128_CBC_SHA'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_RSA_WITH_AES_256_CBC_SHA'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_RSA_WITH_AES_256_CBC_SHA'。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS_RSA_WITH_3DES_EDE_CBC_SHA'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示值的类型为字符串，可取'TLS_RSA_WITH_3DES_EDE_CBC_SHA'。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "ssltype20",
                          children: "SslType20+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type SslType = 'TLS' | 'TLCP'"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "安全通信协议。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 20开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLS'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示使用TLS安全通信协议，值固定为'TLS'字符串。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'TLCP'"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["表示使用TLCP安全通信协议，值固定为'TLCP'字符串。  ", (0,jsx_runtime.jsx)(_components.strong, {
                                  children: (0,jsx_runtime.jsx)(_components.strong, {
                                    children: "说明"
                                  })
                                }), "：  （1）证书支持字符串的规格：  - UTF8String（英文字符集）  - PrintableString  - IA5String  从API Version 22开始支持：  - TeletexString  （2）证书支持扩展的规格：  - BasicConstraints（OID 2.5.29.19）  - KeyUsage（OID2.5.29.15）  - SubjectKeyIdentifier（OID2.5.29.14）  - AuthorityKeyIdentifier（OID2.5.29.35）  从API Version 22开始支持：  - SubjectAltName（OID 2.5.29.17）  - ExtendedKeyUsage（OID 2.5.29.37）"]
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "interceptortype22",
                          children: "InterceptorType22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "HTTP拦截器的类型枚举。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "值"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "INITIAL_REQUEST"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "'INITIAL_REQUEST'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "在初始HTTP请求组装完成后拦截。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "REDIRECTION"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "'REDIRECTION'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "当收到重定向响应时拦截。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "CACHE_CHECKED"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "'READ_CACHE'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "在检查并且命中HTTP缓存时拦截。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "NETWORK_CONNECT"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "'CONNECT_NETWORK'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "在网络请求将要发出前拦截。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "FINAL_RESPONSE"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "'FINAL_RESPONSE'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "在获取最终HTTP响应时拦截。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httprequestcontext22",
                          children: "HttpRequestContext22+"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["HTTP请求上下文数据。该对象实例在拦截器的", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#interceptorhandle22",
                            children: "interceptorHandle"
                          }), "方法中作为参数传入，开发者可以通过该对象获取和修改HTTP请求的相关信息。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "属性-1",
                          children: "属性"
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "url"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "string"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "HTTP拦截器从HTTP请求中获取到的URL，支持在拦截器中进行修改。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "header"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Object"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "HTTP拦截器从HTTP请求中获取到的请求头，支持在拦截器中进行修改。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "body"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Object"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "HTTP拦截器从HTTP请求中获取到的请求体，支持在拦截器中进行修改。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "chaincontinue22",
                          children: "ChainContinue22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type ChainContinue = boolean"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "是否继续处理拦截器链。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "boolean"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "true表示继续处理拦截器链，false表示终止并返回HTTP响应。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httpinterceptor22",
                          children: "HttpInterceptor22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "HTTP拦截器接口。用户可以实现此接口来定义拦截处理函数。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "属性-2",
                          children: "属性"
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "名称"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "只读"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "可选"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "interceptorType"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#interceptortype22",
                                  children: "InterceptorType"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "否"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "拦截器类型，定义此拦截器何时被调用。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "interceptorhandle22",
                          children: "interceptorHandle22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "interceptorHandle(reqContext: HttpRequestContext, rspContext: HttpResponse): Promise<ChainContinue>"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "拦截HTTP处理过程并进行所需的更改。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "reqContext"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httprequestcontext22",
                                  children: "HttpRequestContext"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "经过HTTP拦截器的请求参数的上下文。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "rspContext"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httpresponse",
                                  children: "HttpResponse"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "经过HTTP拦截器的返回结果的上下文。"
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsxs)(_components.td, {
                                children: ["Promise<", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#chaincontinue22",
                                  children: "ChainContinue"
                                }), ">"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "继续HTTP处理或终止并返回HTTP响应。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\n// 创建自定义拦截器\nclass CustomInterceptor implements http.HttpInterceptor {\n  interceptorType: http.InterceptorType = http.InterceptorType.INITIAL_REQUEST;\n\n  async interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {\n    // 在初始请求阶段添加认证头\n    reqContext.header['Authorization'] = 'Bearer token';\n    console.info('Interceptor: Added authorization header');\n    return true; // 继续处理拦截器链\n  }\n}\n\nlet customInterceptor = new CustomInterceptor();\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "httpinterceptorchain22",
                          children: "HttpInterceptorChain22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "HTTP拦截器链。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\nlet interceptorChain = new http.HttpInterceptorChain();\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "addchain22",
                          children: "addChain22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "addChain(chain: HttpInterceptor[]): boolean"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "向HTTP客户端添加拦截器。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.img, {
                            src: (__webpack_require__(725890)/* ["default"] */.A) + "",
                            width: "102",
                            height: "38"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "拦截器链中不能包含相同类型的拦截器实例。如果传入相同类型的拦截器，会抛出错误码2300802（Duplicated interceptor type in the chain）。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "chain"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: [(0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httpinterceptor22",
                                  children: "HttpInterceptor"
                                }), "[]"]
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "拦截器实例组成的拦截链，支持传入单个或者多个不同类型的拦截器。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "boolean"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "拦截器是否添加成功。true表示拦截器添加成功，false表示拦截器没有添加成功。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "错误码："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/errorcode-universal/errorcode-universal",
                            children: "通用错误码"
                          }), "和", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-http/errorcode-net-http",
                            children: "HTTP错误码"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["HTTP错误码映射关系：2300000 + curl错误码。更多常用错误码可参考：", (0,jsx_runtime.jsx)(_components.a, {
                            href: "https://curl.se/libcurl/c/libcurl-errors.html",
                            children: "curl错误码"
                          })]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "错误码ID"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "错误信息"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "2300801"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Parameter type not supported by the interceptor."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "2300802"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Duplicated interceptor type in the chain."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "2300999"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Internal error."
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\n// 创建认证拦截器\nclass AuthInterceptor implements http.HttpInterceptor {\n  interceptorType: http.InterceptorType = http.InterceptorType.INITIAL_REQUEST;\n\n  async interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {\n    // 在初始请求阶段添加认证头\n    reqContext.header['Authorization'] = 'Bearer token';\n    console.info('Interceptor: Added authorization header');\n    return true; // 继续处理拦截器链\n  }\n}\n\nclass LoggingInterceptor implements http.HttpInterceptor {\n  interceptorType: http.InterceptorType = http.InterceptorType.FINAL_RESPONSE;\n\n  async interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {\n    // 在最终响应阶段记录日志\n    console.info(`LoggingInterceptor: Request to ${reqContext.url} completed with status ${rspContext.responseCode}`);\n    return true; // 继续处理拦截器链\n  }\n}\n\n// 创建拦截器链并应用到请求\nlet interceptorChain = new http.HttpInterceptorChain();\nlet authInterceptor = new AuthInterceptor();\nlet loggingInterceptor = new LoggingInterceptor();\n\n// 添加拦截器到链中\ntry {\n  let success = interceptorChain.addChain([authInterceptor, loggingInterceptor]);\n  if (!success) {\n    console.error('Failed to add interceptor chain');\n  }\n} catch (e) {\n  console.error(`Interceptor chain add failed: code=${e.code}, message=${e.message}`);\n}\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "getchain22",
                          children: "getChain22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "getChain(): HttpInterceptor[]"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "获取当前拦截器链中的所有拦截器实例。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsxs)(_components.td, {
                                children: [(0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httpinterceptor22",
                                  children: "HttpInterceptor"
                                }), "[]"]
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["返回通过", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#addchain22",
                                  children: "addChain"
                                }), "方法添加的所有拦截器实例。"]
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\n// 创建自定义拦截器\nclass CustomInterceptor implements http.HttpInterceptor {\n  interceptorType: http.InterceptorType = http.InterceptorType.INITIAL_REQUEST;\n\n  async interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {\n    // 在初始请求阶段添加认证头\n    reqContext.header['Authorization'] = 'Bearer token';\n    console.info('Interceptor: Added authorization header');\n    return true; // 继续处理拦截器链\n  }\n}\n\n// 创建拦截器链并应用到请求\nlet interceptorChain = new http.HttpInterceptorChain();\nlet customInterceptor = new CustomInterceptor();\n\n// 添加拦截器到链中\ntry {\n  let success = interceptorChain.addChain([customInterceptor]);\n  if (!success) {\n    console.error('Failed to add interceptor chain');\n  }\n} catch (e) {\n  console.error(`Interceptor chain add failed: code=${e.code}, message=${e.message}`);\n}\n\n// 获取当前拦截器链中的所有拦截器\nlet chain = interceptorChain.getChain();\nconsole.info(`Current interceptor chain has ${chain.length} interceptors`);\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                          id: "apply22",
                          children: "apply22+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "apply(httpRequest: HttpRequest): boolean"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "将拦截器链附加到目标HTTP请求。每个HTTP请求实例只能附加一个拦截器链。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.img, {
                            src: (__webpack_require__(776227)/* ["default"] */.A) + "",
                            width: "102",
                            height: "38"
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["将拦截器链附加到", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#httprequest",
                            children: "HttpRequest"
                          }), "实例后，当该实例发起HTTP请求时，会触发已附加的拦截器链中相应类型的拦截器。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["更多使用HTTP请求触发拦截器功能，可以参考", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/system-network/network-kit/network-kit-data-transmission/http-request#http%E6%8B%A6%E6%88%AA%E5%99%A8",
                            children: "HTTP拦截器功能代码示例"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["HTTP拦截器相关能力仅支持", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#request",
                            children: "HttpRequest.request"
                          }), "接口，目前暂不支持", (0,jsx_runtime.jsx)(_components.a, {
                            href: "#requestinstream10",
                            children: "HttpRequest.requestInStream"
                          }), "(流式传输)接口。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "元服务API："
                            })
                          }), " 从API version 22开始，该接口支持在元服务中使用。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "参数："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "参数名"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "必填"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "httpRequest"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httprequest",
                                  children: "HttpRequest"
                                })
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "是"
                              }), (0,jsx_runtime.jsxs)(_components.td, {
                                children: ["要发起HTTP请求的", (0,jsx_runtime.jsx)(_components.a, {
                                  href: "#httprequest",
                                  children: "HttpRequest"
                                }), "。"]
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "返回值："
                            })
                          })
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsx)(_components.tbody, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "boolean"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "拦截器是否附加成功。true表示拦截器附加成功，false表示拦截器没有附加成功。"
                              })]
                            })
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "错误码："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["以下错误码的详细介绍参见", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/errorcode-universal/errorcode-universal",
                            children: "通用错误码"
                          }), "和", (0,jsx_runtime.jsx)(_components.a, {
                            href: "/ref/system-network-api/network-api/network-arkts-errcode/errorcode-net-http/errorcode-net-http",
                            children: "HTTP错误码"
                          }), "。"]
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: ["HTTP错误码映射关系：2300000 + curl错误码。更多常用错误码可参考：", (0,jsx_runtime.jsx)(_components.a, {
                            href: "https://curl.se/libcurl/c/libcurl-errors.html",
                            children: "curl错误码"
                          })]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "错误码ID"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "错误信息"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "2300801"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Parameter type not supported by the interceptor."
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "2300999"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "Internal error."
                              })]
                            })]
                          })]
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "示例："
                            })
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                          children: (0,jsx_runtime.jsx)(_components.code, {
                            children: "import { http } from '@kit.NetworkKit';\n\n// 创建认证拦截器\nclass AuthInterceptor implements http.HttpInterceptor {\n  interceptorType: http.InterceptorType = http.InterceptorType.INITIAL_REQUEST;\n\n  async interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {\n    // 在初始请求阶段添加认证头\n    reqContext.header['Authorization'] = 'Bearer token';\n    console.info('Interceptor: Added authorization header');\n    return true; // 继续处理拦截器链\n  }\n}\n\nclass LoggingInterceptor implements http.HttpInterceptor {\n  interceptorType: http.InterceptorType = http.InterceptorType.FINAL_RESPONSE;\n\n  async interceptorHandle(reqContext: http.HttpRequestContext, rspContext: http.HttpResponse): Promise<http.ChainContinue> {\n    // 在最终响应阶段记录日志\n    console.info(`LoggingInterceptor: Request to ${reqContext.url} completed with status ${rspContext.responseCode}`);\n    return true; // 继续处理拦截器链\n  }\n}\n\n// 创建拦截器链\nlet interceptorChain = new http.HttpInterceptorChain();\nlet authInterceptor = new AuthInterceptor();\nlet loggingInterceptor = new LoggingInterceptor();\n\n// 创建HTTP请求\nlet httpRequest = http.createHttp();\n\ntry {\n  // 添加拦截器到链中\n  let success = interceptorChain.addChain([authInterceptor, loggingInterceptor]);\n  if (!success) {\n    console.error('Failed to add interceptor chain');\n  }\n\n  // 将拦截器链应用到HTTP请求\n  let applySuccess = interceptorChain.apply(httpRequest);\n  if (!applySuccess) {\n    console.error('Failed to apply interceptor chain');\n  }\n} catch (e) {\n  console.error(`Interceptor chain add failed: code=${e.code}, message=${e.message}`);\n}\n\n// 发起HTTP请求。如需使用拦截，仅支持通过request接口发起请求\nhttpRequest.request(\"EXAMPLE_URL\", {\n  method: http.RequestMethod.GET,\n  header: { 'Content-Type': 'application/json' }\n}, (err: Error, data: http.HttpResponse) => {\n  if (!err) {\n    console.info('Request completed with response code: ' + data.responseCode);\n  } else {\n    console.error('Request failed: ' + JSON.stringify(err));\n  }\n  httpRequest.destroy();\n});\n"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "pathpreference23",
                          children: "PathPreference23+"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "type PathPreference = 'auto' | 'primaryCellular' | 'secondaryCellular'"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "HTTP请求指定特定网络的类型枚举。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: (0,jsx_runtime.jsx)(_components.img, {
                            src: (__webpack_require__(633600)/* ["default"] */.A) + "",
                            width: "102",
                            height: "38"
                          })
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "推荐在网络并发等场景下使用。"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "当指定的网络没有激活时，系统按照指定默认网络处理。"
                        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                          children: [(0,jsx_runtime.jsx)(_components.strong, {
                            children: (0,jsx_runtime.jsx)(_components.strong, {
                              children: "系统能力"
                            })
                          }), "：SystemCapability.Communication.NetStack"]
                        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                          children: [(0,jsx_runtime.jsx)(_components.thead, {
                            children: (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.th, {
                                children: "类型"
                              }), (0,jsx_runtime.jsx)(_components.th, {
                                children: "说明"
                              })]
                            })
                          }), (0,jsx_runtime.jsxs)(_components.tbody, {
                            children: [(0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'auto'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示HTTP请求指定默认的网络连接。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'primaryCellular'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示在蜂窝网络激活的场景下，HTTP请求指定默认的蜂窝网络连接。"
                              })]
                            }), (0,jsx_runtime.jsxs)(_components.tr, {
                              children: [(0,jsx_runtime.jsx)(_components.td, {
                                children: "'secondaryCellular'"
                              }), (0,jsx_runtime.jsx)(_components.td, {
                                children: "表示在双蜂窝网络激活的场景下，HTTP请求指定副卡的蜂窝网络连接。"
                              })]
                            })]
                          })]
                        }), "\n"]
                      })]
                    })]
                  })]
                })]
              })]
            })]
          })]
        })]
      })]
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
633600(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
487768(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
859120(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
776227(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
252110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
93390(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
331761(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
879991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
355075(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
211650(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
725890(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
934443(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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