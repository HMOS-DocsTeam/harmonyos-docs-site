"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["796806"], {
839436(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_module_remote_communication_overview_remote_communication_overview_md_e36_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-system-network-api-remote-communication-api-remote-communication-c-remote-communication-module-remote-communication-overview-remote-communication-overview-md-e36.json
var site_docs_ref_system_network_api_remote_communication_api_remote_communication_c_remote_communication_module_remote_communication_overview_remote_communication_overview_md_e36_namespaceObject = JSON.parse('{"id":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview","title":"RemoteCommunication","description":"概述","source":"@site/docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview.md","sourceDirName":"system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview","slug":"/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"RemoteCommunication","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview","kit":"系统","last_updated":"2026-04-22","slug":"remote-communication-overview"},"sidebar":"ref","previous":{"title":"urpc","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-arkts/remote-communication-urpcapi/remote-communication-urpcapi"},"next":{"title":"rcp.h","permalink":"/harmonyos-docs-site/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-module/remote-communication-overview/remote-communication-overview.md


const frontMatter = {
	title: 'RemoteCommunication',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview',
	kit: '系统',
	last_updated: '2026-04-22',
	slug: 'remote-communication-overview'
};
const contentTitle = 'RemoteCommunication';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "汇总",
  "id": "汇总",
  "level": 2
}, {
  "value": "文件",
  "id": "文件",
  "level": 3
}, {
  "value": "结构体",
  "id": "结构体",
  "level": 3
}, {
  "value": "宏定义",
  "id": "宏定义",
  "level": 3
}, {
  "value": "类型定义",
  "id": "类型定义",
  "level": 3
}, {
  "value": "枚举",
  "id": "枚举",
  "level": 3
}, {
  "value": "函数",
  "id": "函数",
  "level": 3
}, {
  "value": "宏定义说明",
  "id": "宏定义说明",
  "level": 2
}, {
  "value": "RCP_HOST_MAX_LEN",
  "id": "rcp_host_max_len",
  "level": 3
}, {
  "value": "RCP_IP_MAX_LEN",
  "id": "rcp_ip_max_len",
  "level": 3
}, {
  "value": "RCP_MAX_CONTENT_TYPE_LEN",
  "id": "rcp_max_content_type_len",
  "level": 3
}, {
  "value": "RCP_MAX_FILENAME_LEN",
  "id": "rcp_max_filename_len",
  "level": 3
}, {
  "value": "RCP_MAX_PATH_LEN",
  "id": "rcp_max_path_len",
  "level": 3
}, {
  "value": "RCP_MAX_REQUEST_ID_LEN",
  "id": "rcp_max_request_id_len",
  "level": 3
}, {
  "value": "RCP_METHOD_DELETE",
  "id": "rcp_method_delete",
  "level": 3
}, {
  "value": "RCP_METHOD_GET",
  "id": "rcp_method_get",
  "level": 3
}, {
  "value": "RCP_METHOD_HEAD",
  "id": "rcp_method_head",
  "level": 3
}, {
  "value": "RCP_METHOD_OPTIONS",
  "id": "rcp_method_options",
  "level": 3
}, {
  "value": "RCP_METHOD_PATCH",
  "id": "rcp_method_patch",
  "level": 3
}, {
  "value": "RCP_METHOD_POST",
  "id": "rcp_method_post",
  "level": 3
}, {
  "value": "RCP_METHOD_PUT",
  "id": "rcp_method_put",
  "level": 3
}, {
  "value": "RCP_METHOD_TRACE",
  "id": "rcp_method_trace",
  "level": 3
}, {
  "value": "类型定义说明",
  "id": "类型定义说明",
  "level": 2
}, {
  "value": "Rcp_AuthenticationType",
  "id": "rcp_authenticationtype",
  "level": 3
}, {
  "value": "Rcp_Buffer",
  "id": "rcp_buffer",
  "level": 3
}, {
  "value": "Rcp_CertificateAuthority",
  "id": "rcp_certificateauthority",
  "level": 3
}, {
  "value": "Rcp_CertType",
  "id": "rcp_certtype",
  "level": 3
}, {
  "value": "Rcp_ClientCertificate",
  "id": "rcp_clientcertificate",
  "level": 3
}, {
  "value": "Rcp_Configuration",
  "id": "rcp_configuration",
  "level": 3
}, {
  "value": "Rcp_ConnectionConfiguration",
  "id": "rcp_connectionconfiguration",
  "level": 3
}, {
  "value": "Rcp_ContentOrPathOrCallback",
  "id": "rcp_contentorpathorcallback",
  "level": 3
}, {
  "value": "Rcp_ContentOrPathOrCallbackType",
  "id": "rcp_contentorpathorcallbacktype",
  "level": 3
}, {
  "value": "Rcp_ContentType",
  "id": "rcp_contenttype",
  "level": 3
}, {
  "value": "Rcp_CookieAttributeEntry",
  "id": "rcp_cookieattributeentry",
  "level": 3
}, {
  "value": "Rcp_CookieAttributes",
  "id": "rcp_cookieattributes",
  "level": 3
}, {
  "value": "Rcp_Credential",
  "id": "rcp_credential",
  "level": 3
}, {
  "value": "Rcp_DebugEvent",
  "id": "rcp_debugevent",
  "level": 3
}, {
  "value": "Rcp_DebugInfo",
  "id": "rcp_debuginfo",
  "level": 3
}, {
  "value": "Rcp_DnsConfiguration",
  "id": "rcp_dnsconfiguration",
  "level": 3
}, {
  "value": "Rcp_DnsOverHttps",
  "id": "rcp_dnsoverhttps",
  "level": 3
}, {
  "value": "Rcp_DnsRule",
  "id": "rcp_dnsrule",
  "level": 3
}, {
  "value": "Rcp_DnsRuleType",
  "id": "rcp_dnsruletype",
  "level": 3
}, {
  "value": "Rcp_DnsServers",
  "id": "rcp_dnsservers",
  "level": 3
}, {
  "value": "Rcp_DynamicDnsRuleFunction",
  "id": "rcp_dynamicdnsrulefunction",
  "level": 3
}, {
  "value": "Rcp_EventsHandler",
  "id": "rcp_eventshandler",
  "level": 3
}, {
  "value": "Rcp_ExclusionFunction",
  "id": "rcp_exclusionfunction",
  "level": 3
}, {
  "value": "Rcp_Exclusions",
  "id": "rcp_exclusions",
  "level": 3
}, {
  "value": "Rcp_ExclusionsValueType",
  "id": "rcp_exclusionsvaluetype",
  "level": 3
}, {
  "value": "Rcp_Form",
  "id": "rcp_form",
  "level": 3
}, {
  "value": "Rcp_FormFieldFileValue",
  "id": "rcp_formfieldfilevalue",
  "level": 3
}, {
  "value": "Rcp_FormFieldValue",
  "id": "rcp_formfieldvalue",
  "level": 3
}, {
  "value": "Rcp_FormValueType",
  "id": "rcp_formvaluetype",
  "level": 3
}, {
  "value": "Rcp_GetDataCallback",
  "id": "rcp_getdatacallback",
  "level": 3
}, {
  "value": "Rcp_HeaderEntry",
  "id": "rcp_headerentry",
  "level": 3
}, {
  "value": "Rcp_Headers",
  "id": "rcp_headers",
  "level": 3
}, {
  "value": "Rcp_HeaderValue",
  "id": "rcp_headervalue",
  "level": 3
}, {
  "value": "Rcp_InfoToCollect",
  "id": "rcp_infotocollect",
  "level": 3
}, {
  "value": "Rcp_Interceptor",
  "id": "rcp_interceptor",
  "level": 3
}, {
  "value": "Rcp_InterceptorArray",
  "id": "rcp_interceptorarray",
  "level": 3
}, {
  "value": "Rcp_IpAddress",
  "id": "rcp_ipaddress",
  "level": 3
}, {
  "value": "Rcp_IpAndPort",
  "id": "rcp_ipandport",
  "level": 3
}, {
  "value": "Rcp_MultipartForm",
  "id": "rcp_multipartform",
  "level": 3
}, {
  "value": "Rcp_MultipartFormFieldValue",
  "id": "rcp_multipartformfieldvalue",
  "level": 3
}, {
  "value": "Rcp_MultipartValueType",
  "id": "rcp_multipartvaluetype",
  "level": 3
}, {
  "value": "Rcp_OnDataReceiveCallback",
  "id": "rcp_ondatareceivecallback",
  "level": 3
}, {
  "value": "Rcp_OnDataReceiveCallbackFunc",
  "id": "rcp_ondatareceivecallbackfunc",
  "level": 3
}, {
  "value": "Rcp_OnBinaryReceiveCallback",
  "id": "rcp_onbinaryreceivecallback",
  "level": 3
}, {
  "value": "Rcp_OnBinaryReceiveCallbackFunc",
  "id": "rcp_onbinaryreceivecallbackfunc",
  "level": 3
}, {
  "value": "Rcp_OnStatusCodeReceiveCallback",
  "id": "rcp_onstatuscodereceivecallback",
  "level": 3
}, {
  "value": "Rcp_OnStatusCodeReceiveCallbackFunc",
  "id": "rcp_onstatuscodereceivecallbackfunc",
  "level": 3
}, {
  "value": "Rcp_OnHeaderReceiveCallback",
  "id": "rcp_onheaderreceivecallback",
  "level": 3
}, {
  "value": "Rcp_OnHeaderReceiveCallbackFunc",
  "id": "rcp_onheaderreceivecallbackfunc",
  "level": 3
}, {
  "value": "Rcp_OnProgressCallback",
  "id": "rcp_onprogresscallback",
  "level": 3
}, {
  "value": "Rcp_OnProgressCallbackFunc",
  "id": "rcp_onprogresscallbackfunc",
  "level": 3
}, {
  "value": "Rcp_OnVoidCallback",
  "id": "rcp_onvoidcallback",
  "level": 3
}, {
  "value": "Rcp_OnVoidCallbackFunc",
  "id": "rcp_onvoidcallbackfunc",
  "level": 3
}, {
  "value": "Rcp_PathPreference",
  "id": "rcp_pathpreference",
  "level": 3
}, {
  "value": "Rcp_ProxyConfiguration",
  "id": "rcp_proxyconfiguration",
  "level": 3
}, {
  "value": "Rcp_ProxyTunnelMode",
  "id": "rcp_proxytunnelmode",
  "level": 3
}, {
  "value": "Rcp_ProxyType",
  "id": "rcp_proxytype",
  "level": 3
}, {
  "value": "Rcp_RemoteValidationType",
  "id": "rcp_remotevalidationtype",
  "level": 3
}, {
  "value": "Rcp_Request",
  "id": "rcp_request",
  "level": 3
}, {
  "value": "Rcp_RequestContent",
  "id": "rcp_requestcontent",
  "level": 3
}, {
  "value": "Rcp_RequestCookieEntry",
  "id": "rcp_requestcookieentry",
  "level": 3
}, {
  "value": "Rcp_RequestCookies",
  "id": "rcp_requestcookies",
  "level": 3
}, {
  "value": "Rcp_RequestHandler",
  "id": "rcp_requesthandler",
  "level": 3
}, {
  "value": "Rcp_Response",
  "id": "rcp_response",
  "level": 3
}, {
  "value": "Rcp_ResponseCallback",
  "id": "rcp_responsecallback",
  "level": 3
}, {
  "value": "Rcp_ResponseCallbackObject",
  "id": "rcp_responsecallbackobject",
  "level": 3
}, {
  "value": "Rcp_ResponseCookies",
  "id": "rcp_responsecookies",
  "level": 3
}, {
  "value": "Rcp_SecurityConfiguration",
  "id": "rcp_securityconfiguration",
  "level": 3
}, {
  "value": "Rcp_ServerAuthentication",
  "id": "rcp_serverauthentication",
  "level": 3
}, {
  "value": "Rcp_Session",
  "id": "rcp_session",
  "level": 3
}, {
  "value": "Rcp_SessionConfiguration",
  "id": "rcp_sessionconfiguration",
  "level": 3
}, {
  "value": "Rcp_SessionListener",
  "id": "rcp_sessionlistener",
  "level": 3
}, {
  "value": "Rcp_SessionType",
  "id": "rcp_sessiontype",
  "level": 3
}, {
  "value": "Rcp_StaticDnsRule",
  "id": "rcp_staticdnsrule",
  "level": 3
}, {
  "value": "Rcp_StaticDnsRuleItem",
  "id": "rcp_staticdnsruleitem",
  "level": 3
}, {
  "value": "Rcp_StatusCode",
  "id": "rcp_statuscode",
  "level": 3
}, {
  "value": "Rcp_SyncInterceptor",
  "id": "rcp_syncinterceptor",
  "level": 3
}, {
  "value": "Rcp_SyncInterceptorArray",
  "id": "rcp_syncinterceptorarray",
  "level": 3
}, {
  "value": "Rcp_SyncRequestHandler",
  "id": "rcp_syncrequesthandler",
  "level": 3
}, {
  "value": "Rcp_TimeInfo",
  "id": "rcp_timeinfo",
  "level": 3
}, {
  "value": "Rcp_Timeout",
  "id": "rcp_timeout",
  "level": 3
}, {
  "value": "Rcp_TracingConfiguration",
  "id": "rcp_tracingconfiguration",
  "level": 3
}, {
  "value": "Rcp_TransferConfiguration",
  "id": "rcp_transferconfiguration",
  "level": 3
}, {
  "value": "Rcp_TransferRange",
  "id": "rcp_transferrange",
  "level": 3
}, {
  "value": "Rcp_Urls",
  "id": "rcp_urls",
  "level": 3
}, {
  "value": "Rcp_WebProxy",
  "id": "rcp_webproxy",
  "level": 3
}, {
  "value": "枚举类型说明",
  "id": "枚举类型说明",
  "level": 2
}, {
  "value": "Rcp_AuthenticationType",
  "id": "rcp_authenticationtype-1",
  "level": 3
}, {
  "value": "Rcp_CertType",
  "id": "rcp_certtype-1",
  "level": 3
}, {
  "value": "Rcp_ContentOrPathOrCallbackType",
  "id": "rcp_contentorpathorcallbacktype-1",
  "level": 3
}, {
  "value": "Rcp_ContentType",
  "id": "rcp_contenttype-1",
  "level": 3
}, {
  "value": "Rcp_DebugEvent",
  "id": "rcp_debugevent-1",
  "level": 3
}, {
  "value": "Rcp_DnsRuleType",
  "id": "rcp_dnsruletype-1",
  "level": 3
}, {
  "value": "Rcp_ExclusionsValueType",
  "id": "rcp_exclusionsvaluetype-1",
  "level": 3
}, {
  "value": "Rcp_FormValueType",
  "id": "rcp_formvaluetype-1",
  "level": 3
}, {
  "value": "Rcp_MultipartValueType",
  "id": "rcp_multipartvaluetype-1",
  "level": 3
}, {
  "value": "Rcp_PathPreference",
  "id": "rcp_pathpreference-1",
  "level": 3
}, {
  "value": "Rcp_ProxyTunnelMode",
  "id": "rcp_proxytunnelmode-1",
  "level": 3
}, {
  "value": "Rcp_ProxyType",
  "id": "rcp_proxytype-1",
  "level": 3
}, {
  "value": "Rcp_RemoteValidationType",
  "id": "rcp_remotevalidationtype-1",
  "level": 3
}, {
  "value": "Rcp_SessionType",
  "id": "rcp_sessiontype-1",
  "level": 3
}, {
  "value": "Rcp_StatusCode",
  "id": "rcp_statuscode-1",
  "level": 3
}, {
  "value": "函数说明",
  "id": "函数说明",
  "level": 2
}, {
  "value": "HMS_Rcp_CallNextRequestHandler()",
  "id": "hms_rcp_callnextrequesthandler",
  "level": 3
}, {
  "value": "HMS_Rcp_CallNextSyncRequestHandler()",
  "id": "hms_rcp_callnextsyncrequesthandler",
  "level": 3
}, {
  "value": "HMS_Rcp_CancelRequest()",
  "id": "hms_rcp_cancelrequest",
  "level": 3
}, {
  "value": "HMS_Rcp_CancelSession()",
  "id": "hms_rcp_cancelsession",
  "level": 3
}, {
  "value": "HMS_Rcp_CloseSession()",
  "id": "hms_rcp_closesession",
  "level": 3
}, {
  "value": "HMS_Rcp_CreateForm()",
  "id": "hms_rcp_createform",
  "level": 3
}, {
  "value": "HMS_Rcp_CreateHeaders()",
  "id": "hms_rcp_createheaders",
  "level": 3
}, {
  "value": "HMS_Rcp_CreateMultipartForm()",
  "id": "hms_rcp_createmultipartform",
  "level": 3
}, {
  "value": "HMS_Rcp_CreateRequest()",
  "id": "hms_rcp_createrequest",
  "level": 3
}, {
  "value": "HMS_Rcp_CreateRequestCookies()",
  "id": "hms_rcp_createrequestcookies",
  "level": 3
}, {
  "value": "HMS_Rcp_CreateSession()",
  "id": "hms_rcp_createsession",
  "level": 3
}, {
  "value": "HMS_Rcp_DestroyForm()",
  "id": "hms_rcp_destroyform",
  "level": 3
}, {
  "value": "HMS_Rcp_DestroyHeaderEntries()",
  "id": "hms_rcp_destroyheaderentries",
  "level": 3
}, {
  "value": "HMS_Rcp_DestroyHeaders()",
  "id": "hms_rcp_destroyheaders",
  "level": 3
}, {
  "value": "HMS_Rcp_DestroyMultipartForm()",
  "id": "hms_rcp_destroymultipartform",
  "level": 3
}, {
  "value": "HMS_Rcp_DestroyRequest()",
  "id": "hms_rcp_destroyrequest",
  "level": 3
}, {
  "value": "HMS_Rcp_DestroyRequestCookieEntries()",
  "id": "hms_rcp_destroyrequestcookieentries",
  "level": 3
}, {
  "value": "HMS_Rcp_DestroyRequestCookies()",
  "id": "hms_rcp_destroyrequestcookies",
  "level": 3
}, {
  "value": "HMS_Rcp_DestroyResponseCookieAttrEntries()",
  "id": "hms_rcp_destroyresponsecookieattrentries",
  "level": 3
}, {
  "value": "HMS_Rcp_Fetch()",
  "id": "hms_rcp_fetch",
  "level": 3
}, {
  "value": "HMS_Rcp_FetchSync()",
  "id": "hms_rcp_fetchsync",
  "level": 3
}, {
  "value": "HMS_Rcp_GetFormValue()",
  "id": "hms_rcp_getformvalue",
  "level": 3
}, {
  "value": "HMS_Rcp_GetHeaderEntries()",
  "id": "hms_rcp_getheaderentries",
  "level": 3
}, {
  "value": "HMS_Rcp_GetHeaderValue()",
  "id": "hms_rcp_getheadervalue",
  "level": 3
}, {
  "value": "HMS_Rcp_GetMultipartFormValue()",
  "id": "hms_rcp_getmultipartformvalue",
  "level": 3
}, {
  "value": "HMS_Rcp_GetRequestCookieEntries()",
  "id": "hms_rcp_getrequestcookieentries",
  "level": 3
}, {
  "value": "HMS_Rcp_GetRequestCookieValue()",
  "id": "hms_rcp_getrequestcookievalue",
  "level": 3
}, {
  "value": "HMS_Rcp_GetResponseCookieAttrEntries()",
  "id": "hms_rcp_getresponsecookieattrentries",
  "level": 3
}, {
  "value": "HMS_Rcp_GetResponseCookieAttrValue()",
  "id": "hms_rcp_getresponsecookieattrvalue",
  "level": 3
}, {
  "value": "HMS_Rcp_GetSessionConfiguration()",
  "id": "hms_rcp_getsessionconfiguration",
  "level": 3
}, {
  "value": "HMS_Rcp_GetSessionId()",
  "id": "hms_rcp_getsessionid",
  "level": 3
}, {
  "value": "HMS_Rcp_SetFormValue()",
  "id": "hms_rcp_setformvalue",
  "level": 3
}, {
  "value": "HMS_Rcp_SetHeaderValue()",
  "id": "hms_rcp_setheadervalue",
  "level": 3
}, {
  "value": "HMS_Rcp_SetMultipartFormValue()",
  "id": "hms_rcp_setmultipartformvalue",
  "level": 3
}, {
  "value": "HMS_Rcp_SetRequestCookieValue()",
  "id": "hms_rcp_setrequestcookievalue",
  "level": 3
}, {
  "value": "HMS_Rcp_SetRequestOnBinaryDataRecvCallback()",
  "id": "hms_rcp_setrequestonbinarydatarecvcallback",
  "level": 3
}, {
  "value": "HMS_Rcp_SetRequestOnStatusCodeReceiveCallback()",
  "id": "hms_rcp_setrequestonstatuscodereceivecallback",
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
        id: "remotecommunication",
        children: "RemoteCommunication"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供远程通信能力相关接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持http会话功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "汇总",
      children: "汇总"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "文件",
      children: "文件"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-headerfile/rcp_8h/rcp_8h",
              children: "rcp.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "声明用于访问远程通信的API。提供基本的函数，结构体和const定义。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "结构体",
      children: "结构体"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer",
              children: "Rcp_Buffer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本存储结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
              children: "Rcp_ContentOrPathOrCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
              children: "Rcp_FormFieldFileValue"
            }), "中使用的简单表单数据字段值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
              children: "Rcp_FormFieldFileValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表单字段文件值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value",
              children: "Rcp_FormFieldValue"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["简单表单数据字段值，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多部分表单域值，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), "中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
              children: "Rcp_RequestContent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value",
              children: "Rcp_HeaderValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头映射的值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
              children: "Rcp_HeaderEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___credential/x_rcp___credential",
              children: "Rcp_Credential"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器身份验证中使用的身份验证凭据，包括用户名和密码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___server_authentication/x_rcp___server_authentication",
              children: "Rcp_ServerAuthentication"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器身份验证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___urls/x_rcp___urls",
              children: "Rcp_Urls"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "URL，用于确定主机是否正在使用代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置中用于过滤不使用代理的URLs。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___certificate_authority/x_rcp___certificate_authority",
              children: "Rcp_CertificateAuthority"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于验证远程服务器标识的证书颁发机构（CA）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___client_certificate/x_rcp___client_certificate",
              children: "Rcp_ClientCertificate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration",
              children: "Rcp_SecurityConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的安全配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___web_proxy/x_rcp___web_proxy",
              children: "Rcp_WebProxy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_and_port/x_rcp___ip_and_port",
              children: "Rcp_IpAndPort"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该接口用在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers",
              children: "Rcp_DnsServers"
            }), "中，表示一个DNS服务器的地址和端口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers",
              children: "Rcp_DnsServers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DNS服务器。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration#dnsrules",
              children: "Rcp_DnsConfiguration.dnsRules"
            }), "中的类型之一。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address",
              children: "Rcp_IpAddress"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定静态DNS规则使用的IP地址组。用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item",
              children: "Rcp_StaticDnsRuleItem"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item",
              children: "Rcp_StaticDnsRuleItem"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述单个静态DNS规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule/x_rcp___static_dns_rule",
              children: "Rcp_StaticDnsRule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "静态DNS规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
              children: "Rcp_DnsRule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS规则配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_data_receive_callback/x_rcp___on_data_receive_callback",
              children: "Rcp_OnDataReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接收到数据时回调。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中的配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_progress_callback/x_rcp___on_progress_callback",
              children: "Rcp_OnProgressCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["收发时回调配置，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_header_receive_callback/x_rcp___on_header_receive_callback",
              children: "Rcp_OnHeaderReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置的接收到的header的回调配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_void_callback/x_rcp___on_void_callback",
              children: "Rcp_OnVoidCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置的数据结束或取消事件的回调配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听不同HTTP事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___timeout/x_rcp___timeout",
              children: "Rcp_Timeout"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的超时配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_over_https/x_rcp___dns_over_https",
              children: "Rcp_DnsOverHttps"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS上的DNS配置如果设置，则首选由DOH dns服务器解析的地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_configuration/x_rcp___transfer_configuration",
              children: "Rcp_TransferConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传输配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___info_to_collect/x_rcp___info_to_collect",
              children: "Rcp_InfoToCollect"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要收集的请求处理事件。可以通过响应对象检查收集的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration",
              children: "Rcp_TracingConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求追踪配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___proxy_configuration/x_rcp___proxy_configuration",
              children: "Rcp_ProxyConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration",
              children: "Rcp_DnsConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS解析配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
              children: "Rcp_Configuration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_range/x_rcp___transfer_range",
              children: "Rcp_TransferRange"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP传输范围。该设置将转换为HTTP Range标头。具有范围标头的HTTP请求要求服务器仅发送回HTTP响应的一部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
              children: "Rcp_RequestCookieEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述请求的所有Cookie键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___debug_info/x_rcp___debug_info",
              children: "Rcp_DebugInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述存储在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), "中的调试信息的结构。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
              children: "Rcp_CookieAttributeEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie属性条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies",
              children: "Rcp_ResponseCookies"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info",
              children: "Rcp_TimeInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应计时信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应回调结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络请求的响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
              children: "Rcp_Interceptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步拦截器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
              children: "Rcp_SyncInterceptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步拦截器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor_array/x_rcp___interceptor_array",
              children: "Rcp_InterceptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor_array/x_rcp___sync_interceptor_array",
              children: "Rcp_SyncInterceptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_listener/x_rcp___session_listener",
              children: "Rcp_SessionListener"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭或取消会话事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___connection_configuration/x_rcp___connection_configuration",
              children: "Rcp_ConnectionConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration",
              children: "Rcp_SessionConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_binary_receive_callback/x_rcp___on_binary_receive_callback",
              children: "Rcp_OnBinaryReceiveCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应的二进制数据时的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_status_code_callback/x_rcp___on_status_code_callback",
              children: "Rcp_OnStatusCodeReceiveCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应的状态码时的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "宏定义",
      children: "宏定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_max_request_id_len",
              children: "RCP_MAX_REQUEST_ID_LEN"
            }), " 32"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求ID的最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_max_content_type_len",
              children: "RCP_MAX_CONTENT_TYPE_LEN"
            }), " 64"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "内容类型最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_max_filename_len",
              children: "RCP_MAX_FILENAME_LEN"
            }), " 128"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件名最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_max_path_len",
              children: "RCP_MAX_PATH_LEN"
            }), " 128"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "路径的最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_method_get",
              children: "RCP_METHOD_GET"
            }), " \"GET\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP get方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_method_head",
              children: "RCP_METHOD_HEAD"
            }), " \"HEAD\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP head方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_method_options",
              children: "RCP_METHOD_OPTIONS"
            }), " \"OPTIONS\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP options方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_method_trace",
              children: "RCP_METHOD_TRACE"
            }), " \"TRACE\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP trace方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_method_delete",
              children: "RCP_METHOD_DELETE"
            }), " \"DELETE\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP delete方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_method_post",
              children: "RCP_METHOD_POST"
            }), " \"POST\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP post方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_method_put",
              children: "RCP_METHOD_PUT"
            }), " \"PUT\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP put方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_method_patch",
              children: "RCP_METHOD_PATCH"
            }), " \"PATCH\""]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP patch方法。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_ip_max_len",
              children: "RCP_IP_MAX_LEN"
            }), " 40"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP地址的最大长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_host_max_len",
              children: "RCP_HOST_MAX_LEN"
            }), " 256"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主机名的最大长度。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "类型定义",
      children: "类型定义"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_formvaluetype",
              children: "Rcp_FormValueType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_formvaluetype",
              children: "Rcp_FormValueType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表单值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef int(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_getdatacallback",
              children: "Rcp_GetDataCallback"
            }), ") (char *out, uint32_t size)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过回调函数获取数据。当API需要将数据的下一部分发送到服务器时，将调用此回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_contentorpathorcallbacktype",
              children: "Rcp_ContentOrPathOrCallbackType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_contentorpathorcallbacktype",
              children: "Rcp_ContentOrPathOrCallbackType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调的内容、路径或类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
              children: "Rcp_ContentOrPathOrCallback"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer",
              children: "Rcp_Buffer"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_buffer",
              children: "Rcp_Buffer"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本存储结构。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
              children: "Rcp_ContentOrPathOrCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_contentorpathorcallback",
              children: "Rcp_ContentOrPathOrCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
              children: "Rcp_FormFieldFileValue"
            }), "中使用的简单表单数据字段值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartvaluetype",
              children: "Rcp_MultipartValueType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartvaluetype",
              children: "Rcp_MultipartValueType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多部分值类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
              children: "Rcp_FormFieldFileValue"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_formfieldfilevalue",
              children: "Rcp_FormFieldFileValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表单字段文件值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value",
              children: "Rcp_FormFieldValue"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_formfieldvalue",
              children: "Rcp_FormFieldValue"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["简单表单数据字段值，参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), "和", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartformfieldvalue",
              children: "Rcp_MultipartFormFieldValue"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多部分表单域值，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), "中使用。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_contenttype",
              children: "Rcp_ContentType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_contenttype",
              children: "Rcp_ContentType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
              children: "Rcp_RequestContent"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "简单表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多部分表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
              children: "Rcp_RequestContent"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcontent",
              children: "Rcp_RequestContent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value",
              children: "Rcp_HeaderValue"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headervalue",
              children: "Rcp_HeaderValue"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头映射的值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
              children: "Rcp_HeaderEntry"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headerentry",
              children: "Rcp_HeaderEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求或响应的标头的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_authenticationtype",
              children: "Rcp_AuthenticationType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_authenticationtype",
              children: "Rcp_AuthenticationType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___credential/x_rcp___credential",
              children: "Rcp_Credential"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_credential",
              children: "Rcp_Credential"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器身份验证中使用的身份验证凭据，包括用户名和密码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___server_authentication/x_rcp___server_authentication",
              children: "Rcp_ServerAuthentication"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_serverauthentication",
              children: "Rcp_ServerAuthentication"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器身份验证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef bool(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_exclusionfunction",
              children: "Rcp_ExclusionFunction"
            }), ") (const char *url)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断host是否使用代理的函数指针，true代表使用，false代表不使用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___urls/x_rcp___urls",
              children: "Rcp_Urls"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_urls",
              children: "Rcp_Urls"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "url，用于确定主机是否正在使用代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_exclusionsvaluetype",
              children: "Rcp_ExclusionsValueType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_exclusionsvaluetype",
              children: "Rcp_ExclusionsValueType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["代理排除中使用的数据类型. 用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_exclusions",
              children: "Rcp_Exclusions"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置中用于过滤不使用代理的URLs。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_certtype",
              children: "Rcp_CertType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_certtype",
              children: "Rcp_CertType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端证书类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___certificate_authority/x_rcp___certificate_authority",
              children: "Rcp_CertificateAuthority"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_certificateauthority",
              children: "Rcp_CertificateAuthority"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于验证远程服务器标识的证书颁发机构（CA）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___client_certificate/x_rcp___client_certificate",
              children: "Rcp_ClientCertificate"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_clientcertificate",
              children: "Rcp_ClientCertificate"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_remotevalidationtype",
              children: "Rcp_RemoteValidationType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_remotevalidationtype",
              children: "Rcp_RemoteValidationType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远程验证类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration",
              children: "Rcp_SecurityConfiguration"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_securityconfiguration",
              children: "Rcp_SecurityConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的安全配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_proxytunnelmode",
              children: "Rcp_ProxyTunnelMode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_proxytunnelmode",
              children: "Rcp_ProxyTunnelMode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。“auto”表示为HTTPS创建隧道，而不是为HTTP创建隧道。“always”表示始终创建隧道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___web_proxy/x_rcp___web_proxy",
              children: "Rcp_WebProxy"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_webproxy",
              children: "Rcp_WebProxy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_and_port/x_rcp___ip_and_port",
              children: "Rcp_IpAndPort"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_ipandport",
              children: "Rcp_IpAndPort"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["该接口用在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers",
              children: "Rcp_DnsServers"
            }), "中，表示一个DNS服务器的地址和端口。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers",
              children: "Rcp_DnsServers"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_dnsservers",
              children: "Rcp_DnsServers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DNS服务器。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration#dnsrules",
              children: "Rcp_DnsConfiguration.dnsRules"
            }), "中的类型之一。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address",
              children: "Rcp_IpAddress"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_ipaddress",
              children: "Rcp_IpAddress"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指定静态DNS规则使用的IP地址组。用于", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item",
              children: "Rcp_StaticDnsRuleItem"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item",
              children: "Rcp_StaticDnsRuleItem"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_staticdnsruleitem",
              children: "Rcp_StaticDnsRuleItem"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述单个静态DNS规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule/x_rcp___static_dns_rule",
              children: "Rcp_StaticDnsRule"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_staticdnsrule",
              children: "Rcp_StaticDnsRule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "静态DNS规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address",
              children: "Rcp_IpAddress"
            }), " *(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_dynamicdnsrulefunction",
              children: "Rcp_DynamicDnsRuleFunction"
            }), ") (const char *host, uint16_t port)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "一个可以根据主机名和端口直接返回IP地址的函数。用于动态DNS解析。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_dnsruletype",
              children: "Rcp_DnsRuleType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_dnsruletype",
              children: "Rcp_DnsRuleType"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DNS规则类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
              children: "Rcp_DnsRule"
            }), "中使用的dns规则类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
              children: "Rcp_DnsRule"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_dnsrule",
              children: "Rcp_DnsRule"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS规则配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef size_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_ondatareceivecallbackfunc",
              children: "Rcp_OnDataReceiveCallbackFunc"
            }), ") (void *usrObject, const char *data)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应正文时调用的回调函数（字符数据）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef size_t(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onbinaryreceivecallbackfunc",
              children: "Rcp_OnBinaryReceiveCallbackFunc"
            }), ") (void *usrObject, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___buffer/x_rcp___buffer",
              children: "Rcp_Buffer"
            }), " *buffer)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应正文时调用的回调函数（二进制数据）。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void (* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onstatuscodereceivecallbackfunc",
              children: "Rcp_OnStatusCodeReceiveCallbackFunc"
            }), ")(void *usrObject, uint32_t statusCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应状态码时调用的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onprogresscallbackfunc",
              children: "Rcp_OnProgressCallbackFunc"
            }), ") (void *usrObject, uint64_t totalSize, uint64_t transferredSize)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求/响应数据传输过程中调用的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onheaderreceivecallbackfunc",
              children: "Rcp_OnHeaderReceiveCallbackFunc"
            }), ") (void *usrObject, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "收到所有请求时调用的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onvoidcallbackfunc",
              children: "Rcp_OnVoidCallbackFunc"
            }), ") (void *usrObject)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的DataEnd或Canceled事件回调的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_data_receive_callback/x_rcp___on_data_receive_callback",
              children: "Rcp_OnDataReceiveCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_ondatareceivecallback",
              children: "Rcp_OnDataReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接收到数据时回调。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中的配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_progress_callback/x_rcp___on_progress_callback",
              children: "Rcp_OnProgressCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onprogresscallback",
              children: "Rcp_OnProgressCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["收发时回调配置，在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_header_receive_callback/x_rcp___on_header_receive_callback",
              children: "Rcp_OnHeaderReceiveCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onheaderreceivecallback",
              children: "Rcp_OnHeaderReceiveCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置的接收到的header回调配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_void_callback/x_rcp___on_void_callback",
              children: "Rcp_OnVoidCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onvoidcallback",
              children: "Rcp_OnVoidCallback"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), "中配置的数据结束或已取消事件的回调配置。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
              children: "Rcp_EventsHandler"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_eventshandler",
              children: "Rcp_EventsHandler"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "监听不同HTTP事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___timeout/x_rcp___timeout",
              children: "Rcp_Timeout"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_timeout",
              children: "Rcp_Timeout"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的超时配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_over_https/x_rcp___dns_over_https",
              children: "Rcp_DnsOverHttps"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_dnsoverhttps",
              children: "Rcp_DnsOverHttps"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTPS上的DNS配置如果设置，则首选由DOH DNS服务器解析的地址。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_pathpreference",
              children: "Rcp_PathPreference"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_pathpreference",
              children: "Rcp_PathPreference"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求路径首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_configuration/x_rcp___transfer_configuration",
              children: "Rcp_TransferConfiguration"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_transferconfiguration",
              children: "Rcp_TransferConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传输配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___info_to_collect/x_rcp___info_to_collect",
              children: "Rcp_InfoToCollect"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_infotocollect",
              children: "Rcp_InfoToCollect"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "指定要收集的请求处理事件。可以通过响应对象检查收集的事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration",
              children: "Rcp_TracingConfiguration"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_tracingconfiguration",
              children: "Rcp_TracingConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求追踪配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_proxytype",
              children: "Rcp_ProxyType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_proxytype",
              children: "Rcp_ProxyType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理类型。用于区分不同的代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___proxy_configuration/x_rcp___proxy_configuration",
              children: "Rcp_ProxyConfiguration"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_proxyconfiguration",
              children: "Rcp_ProxyConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration",
              children: "Rcp_DnsConfiguration"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_dnsconfiguration",
              children: "Rcp_DnsConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS解析配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
              children: "Rcp_Configuration"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_configuration",
              children: "Rcp_Configuration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___transfer_range/x_rcp___transfer_range",
              children: "Rcp_TransferRange"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_transferrange",
              children: "Rcp_TransferRange"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP传输范围。该设置将转换为HTTP Range标头。具有范围标头的HTTP请求要求服务器仅返回HTTP响应的一部分。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_request",
              children: "Rcp_Request"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
              children: "Rcp_RequestCookieEntry"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookieentry",
              children: "Rcp_RequestCookieEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述请求的所有Cookie键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_statuscode",
              children: "Rcp_StatusCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_statuscode",
              children: "Rcp_StatusCode"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求响应的状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_debugevent",
              children: "Rcp_DebugEvent"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_debugevent",
              children: "Rcp_DebugEvent"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述调试信息的事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___debug_info/x_rcp___debug_info",
              children: "Rcp_DebugInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_debuginfo",
              children: "Rcp_DebugInfo"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述存储在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), "中的调试信息的结构。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["描述", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), "中Cookie属性的类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
              children: "Rcp_CookieAttributeEntry"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_cookieattributeentry",
              children: "Rcp_CookieAttributeEntry"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie属性条目。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_cookies/x_rcp___response_cookies",
              children: "Rcp_ResponseCookies"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_responsecookies",
              children: "Rcp_ResponseCookies"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___time_info/x_rcp___time_info",
              children: "Rcp_TimeInfo"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_timeinfo",
              children: "Rcp_TimeInfo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应计时信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_response",
              children: "Rcp_Response"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网络请求的响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef void(* ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_responsecallback",
              children: "Rcp_ResponseCallback"
            }), ") (void *usrCtx, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), " *response, uint32_t errCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应回调函数指针。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_responsecallbackobject",
              children: "Rcp_ResponseCallbackObject"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应回调结构体。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requesthandler",
              children: "Rcp_RequestHandler"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requesthandler",
              children: "Rcp_RequestHandler"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
              children: "Rcp_Interceptor"
            }), "关联的异步处理器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_syncrequesthandler",
              children: "Rcp_SyncRequestHandler"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_syncrequesthandler",
              children: "Rcp_SyncRequestHandler"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
              children: "Rcp_SyncInterceptor"
            }), "关联的同步处理器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
              children: "Rcp_Interceptor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_interceptor",
              children: "Rcp_Interceptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步拦截器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
              children: "Rcp_SyncInterceptor"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_syncinterceptor",
              children: "Rcp_SyncInterceptor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步拦截器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor_array/x_rcp___interceptor_array",
              children: "Rcp_InterceptorArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_interceptorarray",
              children: "Rcp_InterceptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "异步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor_array/x_rcp___sync_interceptor_array",
              children: "Rcp_SyncInterceptorArray"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_syncinterceptorarray",
              children: "Rcp_SyncInterceptorArray"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "同步拦截器数组。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef enum ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_sessiontype",
              children: "Rcp_SessionType"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_sessiontype",
              children: "Rcp_SessionType"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_listener/x_rcp___session_listener",
              children: "Rcp_SessionListener"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_sessionlistener",
              children: "Rcp_SessionListener"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭或取消会话事件的回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___connection_configuration/x_rcp___connection_configuration",
              children: "Rcp_ConnectionConfiguration"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_connectionconfiguration",
              children: "Rcp_ConnectionConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "连接配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration",
              children: "Rcp_SessionConfiguration"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_sessionconfiguration",
              children: "Rcp_SessionConfiguration"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_binary_receive_callback/x_rcp___on_binary_receive_callback",
              children: "Rcp_OnBinaryReceiveCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onbinaryreceivecallback",
              children: "Rcp_OnBinaryReceiveCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应的二进制数据时的回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["typedef struct ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___on_status_code_callback/x_rcp___on_status_code_callback",
              children: "Rcp_OnStatusCodeReceiveCallback"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onstatuscodereceivecallback",
              children: "Rcp_OnStatusCodeReceiveCallback"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收到响应的状态码时的回调。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "枚举",
      children: "枚举"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_formvaluetype",
              children: "Rcp_FormValueType"
            }), " {  RCP_FORM_VALUE_TYPE_INT32, RCP_FORM_VALUE_TYPE_INT64, RCP_FORM_VALUE_TYPE_BOOL, RCP_FORM_VALUE_TYPE_STRING,  RCP_FORM_VALUE_TYPE_DOUBLE  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表单值类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_contentorpathorcallbacktype",
              children: "Rcp_ContentOrPathOrCallbackType"
            }), " { RCP_FILE_VALUE_TYPE_CONTENT, RCP_FILE_VALUE_TYPE_PATH, RCP_FILE_VALUE_TYPE_CALLBACK }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["回调的内容、路径或类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
              children: "Rcp_ContentOrPathOrCallback"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartvaluetype",
              children: "Rcp_MultipartValueType"
            }), " { RCP_TYPE_FORM_FIELD_VALUE, RCP_TYPE_FORM_FIELD_FILE_VALUE }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["多部分值类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_contenttype",
              children: "Rcp_ContentType"
            }), " { RCP_CONTENT_TYPE_STRING, RCP_CONTENT_TYPE_FORM, RCP_CONTENT_TYPE_MULTIPARTFORM, RCP_CONTENT_TYPE_GETCALLBACK }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["内容类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
              children: "Rcp_RequestContent"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_authenticationtype",
              children: "Rcp_AuthenticationType"
            }), " { RCP_AUTHENTICATION_AUTO, RCP_AUTHENTICATION_BASIC, RCP_AUTHENTICATION_NTLM, RCP_AUTHENTICATION_DIGEST }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_exclusionsvaluetype",
              children: "Rcp_ExclusionsValueType"
            }), " { RCP_EXCLUSION_USE_URL_ARRAY, RCP_EXCLUSION_USE_CALLBACK }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["代理排除中使用的数据类型，用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            }), "中使用的数据。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_certtype",
              children: "Rcp_CertType"
            }), " { RCP_CERT_PEM, RCP_CERT_DER, RCP_CERT_P12 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "客户端证书类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_remotevalidationtype",
              children: "Rcp_RemoteValidationType"
            }), " { RCP_REMOTE_VALIDATION_SYSTEM, RCP_REMOTE_VALIDATION_SKIP, RCP_REMOTE_VALIDATION_CERTIFICATE_AUTHORITY }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "远程验证类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_proxytunnelmode",
              children: "Rcp_ProxyTunnelMode"
            }), " { RCP_PROXY_TUNNEL_AUTO, RCP_PROXY_TUNNEL_ALWAYS }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。“auto”表示为HTTPS创建隧道，而不是为HTTP创建隧道。“always”表示始终创建隧道。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_dnsruletype",
              children: "Rcp_DnsRuleType"
            }), " { RCP_DNS_RULE_DNS_SERVERS, RCP_DNS_RULE_STATIC, RCP_DNS_RULE_DYNAMIC }"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["DNS规则类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
              children: "Rcp_DnsRule"
            }), "中使用的DNS规则类型。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_pathpreference",
              children: "Rcp_PathPreference"
            }), " { RCP_PATH_PREFERENCE_AUTO, RCP_PATH_PREFERENCE_WIFI, RCP_PATH_PREFERENCE_CELLULAR }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求路径首选项。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_proxytype",
              children: "Rcp_ProxyType"
            }), " { RCP_PROXY_SYSTEM, RCP_PROXY_CUSTOM, RCP_PROXY_NO_PROXY }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "代理类型。用于区分不同的代理配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_statuscode",
              children: "Rcp_StatusCode"
            }), " {  RCP_NONE = 0, RCP_OK = 200, RCP_CREATED, RCP_ACCEPTED,  RCP_NOT_AUTHORITATIVE, RCP_NO_CONTENT, RCP_RESET, RCP_PARTIAL,  RCP_MULTI_CHOICE = 300, RCP_MOVED_PERMANENTLY, RCP_MOVED_TEMPORARILY, RCP_SEE_OTHER,  RCP_NOT_MODIFIED, RCP_USE_PROXY, RCP_BAD_REQUEST = 400, RCP_UNAUTHORIZED,  RCP_PAYMENT_REQUIRED, RCP_FORBIDDEN, RCP_NOT_FOUND, RCP_BAD_METHOD,  RCP_NOT_ACCEPTABLE, RCP_PROXY_AUTH, RCP_CLIENT_TIMEOUT, RCP_CONFLICT,  RCP_GONE, RCP_LENGTH_REQUIRED, RCP_PRECON_FAILED, RCP_ENTITY_TOO_LARGE,  RCP_REQ_TOO_LONG, RCP_UNSUPPORTED_TYPE, RCP_INTERNAL_ERROR = 500, RCP_NOT_IMPLEMENTED,  RCP_BAD_GATEWAY, RCP_UNAVAILABLE, RCP_GATEWAY_TIMEOUT, RCP_VERSION  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求响应的状态码。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_debugevent",
              children: "Rcp_DebugEvent"
            }), " {  RCP_DEBUG_EVENT_TEXT, RCP_DEBUG_EVENT_HEADER_IN, RCP_DEBUG_EVENT_HEADER_OUT, RCP_DEBUG_EVENT_DATA_IN,  RCP_DEBUG_EVENT_DATA_OUT, RCP_DEBUG_EVENT_SSL_DATA_IN, RCP_DEBUG_EVENT_SSL_DATA_OUT  }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "描述调试信息的事件类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_sessiontype",
              children: "Rcp_SessionType"
            }), " { RCP_SESSION_TYPE_HTTP = 0, RCP_SESSION_TYPE_MAX = 100 }"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "函数",
      children: "函数"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_createform",
              children: "HMS_Rcp_CreateForm"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个简单表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_destroyform",
              children: "HMS_Rcp_DestroyForm"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), " *form)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个简单表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_setformvalue",
              children: "HMS_Rcp_SetFormValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), " *form, const char *key, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value",
              children: "Rcp_FormFieldValue"
            }), " *value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置简单表单的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value",
              children: "Rcp_FormFieldValue"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getformvalue",
              children: "HMS_Rcp_GetFormValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), " *form, const char *key)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过键获取一个简单表单的对应值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_createmultipartform",
              children: "HMS_Rcp_CreateMultipartForm"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建一个多部分表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_destroymultipartform",
              children: "HMS_Rcp_DestroyMultipartForm"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), " *multipartForm)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁一个多部分表单。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_setmultipartformvalue",
              children: "HMS_Rcp_SetMultipartFormValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), " *multipartForm, const char *key, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), " *value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置多部分表单的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
              children: "Rcp_MultipartFormFieldValue"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getmultipartformvalue",
              children: "HMS_Rcp_GetMultipartFormValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), " *multipartForm, const char *key)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过键获取多部分表单的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_createheaders",
              children: "HMS_Rcp_CreateHeaders"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为请求或响应创建标头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_destroyheaders",
              children: "HMS_Rcp_DestroyHeaders"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁请求或响应的标头。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_setheadervalue",
              children: "HMS_Rcp_SetHeaderValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers, const char *name, const char *value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置请求或响应头的键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value",
              children: "Rcp_HeaderValue"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getheadervalue",
              children: "HMS_Rcp_GetHeaderValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers, const char *name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过键获取请求或响应头的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
              children: "Rcp_HeaderEntry"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getheaderentries",
              children: "HMS_Rcp_GetHeaderEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), " *headers)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取请求或响应头的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_destroyheaderentries",
              children: "HMS_Rcp_DestroyHeaderEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
              children: "Rcp_HeaderEntry"
            }), " *headerEntry)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getheaderentries",
              children: "HMS_Rcp_GetHeaderEntries"
            }), "中获取的所有键值对。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_createrequest",
              children: "HMS_Rcp_CreateRequest"
            }), " (const char *url)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_destroyrequest",
              children: "HMS_Rcp_DestroyRequest"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_createrequestcookies",
              children: "HMS_Rcp_CreateRequestCookies"
            }), " (void)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建空的请求Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_destroyrequestcookies",
              children: "HMS_Rcp_DestroyRequestCookies"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " *cookies)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁请求Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_setrequestcookievalue",
              children: "HMS_Rcp_SetRequestCookieValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " *cookies, const char *name, const char *value)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置请求Cookie。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getrequestcookievalue",
              children: "HMS_Rcp_GetRequestCookieValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " *cookies, const char *name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过名称获取请求Cookie的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
              children: "Rcp_RequestCookieEntry"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getrequestcookieentries",
              children: "HMS_Rcp_GetRequestCookieEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), " *cookies)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取请求Cookie中的所有键值对。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_destroyrequestcookieentries",
              children: "HMS_Rcp_DestroyRequestCookieEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
              children: "Rcp_RequestCookieEntry"
            }), " *cookieEntry)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["销毁从", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getrequestcookievalue",
              children: "HMS_Rcp_GetRequestCookieValue"
            }), "获取的所有与请求Cookie相关的键值对。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getresponsecookieattrvalue",
              children: "HMS_Rcp_GetResponseCookieAttrValue"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), " *cookieAttributes, const char *name)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过名称获取Cookie属性的值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
              children: "Rcp_CookieAttributeEntry"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getresponsecookieattrentries",
              children: "HMS_Rcp_GetResponseCookieAttrEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), " *cookieAttributes)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), "中获取所有响应Cookie属性。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["void ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_destroyresponsecookieattrentries",
              children: "HMS_Rcp_DestroyResponseCookieAttrEntries"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
              children: "Rcp_CookieAttributeEntry"
            }), " *entries)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "销毁响应Cookie属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_callnextrequesthandler",
              children: "HMS_Rcp_CallNextRequestHandler"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requesthandler",
              children: "Rcp_RequestHandler"
            }), " *next, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            }), " *responseCallback)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在拦截器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
              children: "Rcp_Interceptor"
            }), "的函数中可以调用下一个拦截器或defaultHandler。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_callnextsyncrequesthandler",
              children: "HMS_Rcp_CallNextSyncRequestHandler"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_syncrequesthandler",
              children: "Rcp_SyncRequestHandler"
            }), " *next, uint32_t *errCode)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在拦截器", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
              children: "Rcp_SyncInterceptor"
            }), "的函数中可以调用下一个拦截器或默认处理器。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_createsession",
              children: "HMS_Rcp_CreateSession"
            }), " (const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration",
              children: "Rcp_SessionConfiguration"
            }), " *configuration, uint32_t *errCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "创建会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const char * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getsessionid",
              children: "HMS_Rcp_GetSessionId"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), " *session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取会话ID。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration",
              children: "Rcp_SessionConfiguration"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_getsessionconfiguration",
              children: "HMS_Rcp_GetSessionConfiguration"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), " *session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取会话配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), " * ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_fetchsync",
              children: "HMS_Rcp_FetchSync"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request, uint32_t *errCode)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送同步请求并获取响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_fetch",
              children: "HMS_Rcp_Fetch"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), " *session, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            }), " *responseCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送异步请求并获取响应。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_cancelrequest",
              children: "HMS_Rcp_CancelRequest"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), " *session, const ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), " *request)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消一个请求。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_cancelsession",
              children: "HMS_Rcp_CancelSession"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), " *session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_closesession",
              children: "HMS_Rcp_CloseSession"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), " **session)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_setrequestonbinarydatarecvcallback",
              children: "HMS_Rcp_SetRequestOnBinaryDataRecvCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_request",
              children: "Rcp_Request"
            }), " *request, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onbinaryreceivecallback",
              children: "Rcp_OnBinaryReceiveCallback"
            }), " onBinaryReceiveCallback)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["为请求设置流式接收二进制数据的回调函数。该回调函数与", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
              children: "Rcp_Configuration"
            }), "中配置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_ondatareceivecallback",
              children: "Rcp_OnDataReceiveCallback"
            }), "功能一致。设置后将替换在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
              children: "Rcp_Configuration"
            }), "中配置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_ondatareceivecallback",
              children: "Rcp_OnDataReceiveCallback"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["uint32_t ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#hms_rcp_setrequestonstatuscodereceivecallback",
              children: "HMS_Rcp_SetRequestOnStatusCodeReceiveCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_request",
              children: "Rcp_Request"
            }), " *request, ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_onstatuscodereceivecallback",
              children: "Rcp_OnStatusCodeReceiveCallback"
            }), " onStatusCodeReceiveCallback)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "为请求设置响应状态码接收回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "宏定义说明",
      children: "宏定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_host_max_len",
      children: "RCP_HOST_MAX_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_HOST_MAX_LEN   256\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主机名的最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_ip_max_len",
      children: "RCP_IP_MAX_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_IP_MAX_LEN   40\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "IP地址的最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_max_content_type_len",
      children: "RCP_MAX_CONTENT_TYPE_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_MAX_CONTENT_TYPE_LEN   64\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "内容类型最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_max_filename_len",
      children: "RCP_MAX_FILENAME_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_MAX_FILENAME_LEN   128\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件名最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_max_path_len",
      children: "RCP_MAX_PATH_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_MAX_PATH_LEN   128\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "路径的最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_max_request_id_len",
      children: "RCP_MAX_REQUEST_ID_LEN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_MAX_REQUEST_ID_LEN   32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求ID的最大长度。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_method_delete",
      children: "RCP_METHOD_DELETE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_METHOD_DELETE   \"DELETE\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP delete方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_method_get",
      children: "RCP_METHOD_GET"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_METHOD_GET   \"GET\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP get方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_method_head",
      children: "RCP_METHOD_HEAD"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_METHOD_HEAD   \"HEAD\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP head方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_method_options",
      children: "RCP_METHOD_OPTIONS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_METHOD_OPTIONS   \"OPTIONS\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP options方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_method_patch",
      children: "RCP_METHOD_PATCH"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_METHOD_PATCH   \"PATCH\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP patch方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_method_post",
      children: "RCP_METHOD_POST"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_METHOD_POST   \"POST\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP post方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_method_put",
      children: "RCP_METHOD_PUT"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_METHOD_PUT   \"PUT\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP put方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_method_trace",
      children: "RCP_METHOD_TRACE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#define RCP_METHOD_TRACE   \"TRACE\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP trace方法。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "类型定义说明",
      children: "类型定义说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_authenticationtype",
      children: "Rcp_AuthenticationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_AuthenticationType Rcp_AuthenticationType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_buffer",
      children: "Rcp_Buffer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Buffer Rcp_Buffer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文本存储结构。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_certificateauthority",
      children: "Rcp_CertificateAuthority"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_CertificateAuthority Rcp_CertificateAuthority\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于验证远程服务器标识的证书颁发机构（CA）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_certtype",
      children: "Rcp_CertType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_CertType Rcp_CertType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端证书类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_clientcertificate",
      children: "Rcp_ClientCertificate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_ClientCertificate Rcp_ClientCertificate\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送到远程服务器的客户端证书，远程服务器将使用它来验证客户端的标识。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_configuration",
      children: "Rcp_Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Configuration Rcp_Configuration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_connectionconfiguration",
      children: "Rcp_ConnectionConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_ConnectionConfiguration Rcp_ConnectionConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "连接配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_contentorpathorcallback",
      children: "Rcp_ContentOrPathOrCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_ContentOrPathOrCallback Rcp_ContentOrPathOrCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
        children: "Rcp_FormFieldFileValue"
      }), "中使用的简单表单数据字段值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_contentorpathorcallbacktype",
      children: "Rcp_ContentOrPathOrCallbackType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_ContentOrPathOrCallbackType Rcp_ContentOrPathOrCallbackType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调的内容、路径或类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
        children: "Rcp_ContentOrPathOrCallback"
      }), "中使用的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_contenttype",
      children: "Rcp_ContentType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_ContentType Rcp_ContentType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["内容类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
        children: "Rcp_RequestContent"
      }), "中使用的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_cookieattributeentry",
      children: "Rcp_CookieAttributeEntry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_CookieAttributeEntry Rcp_CookieAttributeEntry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie属性条目。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_cookieattributes",
      children: "Rcp_CookieAttributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_CookieAttributes Rcp_CookieAttributes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["描述", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
        children: "Rcp_Response"
      }), "中Cookie属性的类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_credential",
      children: "Rcp_Credential"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Credential Rcp_Credential\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器身份验证中使用的身份验证凭据，包括用户名和密码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_debugevent",
      children: "Rcp_DebugEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_DebugEvent Rcp_DebugEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述调试信息的事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_debuginfo",
      children: "Rcp_DebugInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_DebugInfo Rcp_DebugInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["描述存储在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
        children: "Rcp_Response"
      }), "中的调试信息的结构。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_dnsconfiguration",
      children: "Rcp_DnsConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_DnsConfiguration Rcp_DnsConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DNS解析配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_dnsoverhttps",
      children: "Rcp_DnsOverHttps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_DnsOverHttps Rcp_DnsOverHttps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果设置了HTTPS上的DNS配置，则首选由DOH DNS服务器解析的地址。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_dnsrule",
      children: "Rcp_DnsRule"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_DnsRule Rcp_DnsRule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DNS规则配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_dnsruletype",
      children: "Rcp_DnsRuleType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_DnsRuleType Rcp_DnsRuleType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DNS规则类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
        children: "Rcp_DnsRule"
      }), "中使用的DNS规则类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_dnsservers",
      children: "Rcp_DnsServers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_DnsServers Rcp_DnsServers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DNS服务器。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_configuration/x_rcp___dns_configuration#dnsrules",
        children: "Rcp_DnsConfiguration.dnsRules"
      }), "中的类型之一。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_dynamicdnsrulefunction",
      children: "Rcp_DynamicDnsRuleFunction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef Rcp_IpAddress*(* Rcp_DynamicDnsRuleFunction) (const char *host, uint16_t port)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个可以根据主机名和端口直接返回IP地址的函数。用于动态DNS解析。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "host"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主机名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "port"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "端口号。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_IpAddress* 指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___ip_address/x_rcp___ip_address",
        children: "Rcp_IpAddress"
      }), "的指针。基于主机名和端口的IP地址。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_eventshandler",
      children: "Rcp_EventsHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_EventsHandler Rcp_EventsHandler\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "监听不同HTTP事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_exclusionfunction",
      children: "Rcp_ExclusionFunction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef bool(* Rcp_ExclusionFunction) (const char *url)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "判断host是否使用代理的函数指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的URL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "bool 返回是否使用代理。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_exclusions",
      children: "Rcp_Exclusions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Exclusions Rcp_Exclusions\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代理配置中用于过滤不使用代理的URLs。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request#url",
        children: "Rcp_Request.url"
      }), "匹配", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
        children: "Rcp_Exclusions"
      }), "规则，则", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
        children: "Rcp_Request"
      }), "不会使用代理。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_exclusionsvaluetype",
      children: "Rcp_ExclusionsValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_ExclusionsValueType Rcp_ExclusionsValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["代理排除中使用的数据类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
        children: "Rcp_Exclusions"
      }), "中使用的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_form",
      children: "Rcp_Form"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_FormRcp_Form\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "简单表单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_formfieldfilevalue",
      children: "Rcp_FormFieldFileValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_FormFieldFileValue Rcp_FormFieldFileValue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表单字段文件值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_formfieldvalue",
      children: "Rcp_FormFieldValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_FormFieldValue Rcp_FormFieldValue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["简单表单数据字段值，参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_form",
        children: "Rcp_Form"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
        children: "Rcp_MultipartFormFieldValue"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_formvaluetype",
      children: "Rcp_FormValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_FormValueType Rcp_FormValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表单值类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_getdatacallback",
      children: "Rcp_GetDataCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef int(* Rcp_GetDataCallback) (char *out, uint32_t size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过回调函数获取数据。当API需要将数据的下一部分发送到服务器时，将调用此回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该回调可能使用在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value#contentorpathorcb",
        children: "Rcp_FormFieldFileValue.contentOrPathOrCb"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
        children: "Rcp_RequestContent"
      }), "中。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "out"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "输出的数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据大小"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "int 返回值为-1表示错误，返回值0表示停止传输。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_headerentry",
      children: "Rcp_HeaderEntry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_HeaderEntry Rcp_HeaderEntry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求或响应的标头的所有键值对。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_headers",
      children: "Rcp_Headers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Headers Rcp_Headers\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求或响应的标头。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_headervalue",
      children: "Rcp_HeaderValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_HeaderValue Rcp_HeaderValue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求或响应的标头映射的值类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_infotocollect",
      children: "Rcp_InfoToCollect"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_InfoToCollect Rcp_InfoToCollect\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指定要收集的请求处理事件。可以通过响应对象检查收集的事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_interceptor",
      children: "Rcp_Interceptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Interceptor Rcp_Interceptor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步拦截器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_interceptorarray",
      children: "Rcp_InterceptorArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_InterceptorArray Rcp_InterceptorArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "异步拦截器数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_ipaddress",
      children: "Rcp_IpAddress"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_IpAddress Rcp_IpAddress\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["指定静态DNS规则使用的IP地址组。用于", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___static_dns_rule_item/x_rcp___static_dns_rule_item",
        children: "Rcp_StaticDnsRuleItem"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_ipandport",
      children: "Rcp_IpAndPort"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_IpAndPort Rcp_IpAndPort\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该接口用在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_servers/x_rcp___dns_servers",
        children: "Rcp_DnsServers"
      }), "中，表示一个DNS服务器的地址和端口。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_multipartform",
      children: "Rcp_MultipartForm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_MultipartForm Rcp_MultipartForm\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多部分表单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_multipartformfieldvalue",
      children: "Rcp_MultipartFormFieldValue"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_MultipartFormFieldValue Rcp_MultipartFormFieldValue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多部分表单域值，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_multipartform",
        children: "Rcp_MultipartForm"
      }), "中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_multipartvaluetype",
      children: "Rcp_MultipartValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_MultipartValueType Rcp_MultipartValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多部分值类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
        children: "Rcp_MultipartFormFieldValue"
      }), "中使用的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_ondatareceivecallback",
      children: "Rcp_OnDataReceiveCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_OnDataReceiveCallback Rcp_OnDataReceiveCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接收到数据时回调。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
        children: "Rcp_EventsHandler"
      }), "中的配置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_ondatareceivecallbackfunc",
      children: "Rcp_OnDataReceiveCallbackFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef size_t(* Rcp_OnDataReceiveCallbackFunc) (void *usrObject, const char *data)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接收到响应正文时调用的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usrObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户定义的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应体。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "size_t 响应体的长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onbinaryreceivecallback",
      children: "Rcp_OnBinaryReceiveCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_OnBinaryReceiveCallback Rcp_OnBinaryReceiveCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应的二进制数据接收回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.1(13)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onbinaryreceivecallbackfunc",
      children: "Rcp_OnBinaryReceiveCallbackFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef size_t(* Rcp_OnBinaryReceiveCallbackFunc) (void *usrObject, Rcp_Buffer *buffer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接收到响应正文时调用的二进制回调函数。其回调点与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
        children: "Rcp_Configuration"
      }), "中配置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_ondatareceivecallback",
        children: "Rcp_OnDataReceiveCallback"
      }), "一致。设置后其回调函数会替换在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
        children: "Rcp_Configuration"
      }), "中配置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_ondatareceivecallback",
        children: "Rcp_OnDataReceiveCallback"
      }), "，功能上能够涵盖", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_ondatareceivecallback",
        children: "Rcp_OnDataReceiveCallback"
      }), "的字符数据接收获取功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.1(13)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usrObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户定义的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "buffer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应体的二进制数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "size_t 响应体二进制数据的长度。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onstatuscodereceivecallback",
      children: "Rcp_OnStatusCodeReceiveCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_OnStatusCodeReceiveCallback Rcp_OnStatusCodeReceiveCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于接收响应状态码的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onstatuscodereceivecallbackfunc",
      children: "Rcp_OnStatusCodeReceiveCallbackFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void (*Rcp_OnStatusCodeReceiveCallbackFunc) (void *usrObject, uint32_t statusCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "接收到响应状态码时调用的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usrObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户定义的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "statusCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应状态码。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onheaderreceivecallback",
      children: "Rcp_OnHeaderReceiveCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_OnHeaderReceiveCallback Rcp_OnHeaderReceiveCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
        children: "Rcp_EventsHandler"
      }), "中配置的接收到的header的回调配置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onheaderreceivecallbackfunc",
      children: "Rcp_OnHeaderReceiveCallbackFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* Rcp_OnHeaderReceiveCallbackFunc) (void *usrObject, Rcp_Headers *headers)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "收到所有请求时调用的回调。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usrObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户定义的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "headers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["接收到的请求头，指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onprogresscallback",
      children: "Rcp_OnProgressCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_OnProgressCallback Rcp_OnProgressCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["收发时回调配置，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
        children: "Rcp_EventsHandler"
      }), "中配置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onprogresscallbackfunc",
      children: "Rcp_OnProgressCallbackFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* Rcp_OnProgressCallbackFunc) (void *usrObject, uint64_t totalSize, uint64_t transferredSize)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求/响应数据传输过程中调用的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usrObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户定义的对象。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "totalSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数据总大小。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "transferredSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "已传输的数据大小。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onvoidcallback",
      children: "Rcp_OnVoidCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_OnVoidCallback Rcp_OnVoidCallback\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___events_handler/x_rcp___events_handler",
        children: "Rcp_EventsHandler"
      }), "中配置的数据结束或已取消事件的回调配置。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_onvoidcallbackfunc",
      children: "Rcp_OnVoidCallbackFunc"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* Rcp_OnVoidCallbackFunc) (void *usrObject)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求的DataEnd或Canceled事件回调的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usrObject"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户定义的对象。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_pathpreference",
      children: "Rcp_PathPreference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_PathPreference Rcp_PathPreference\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求路径首选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "调用者的建议，最终由系统决定使用哪个路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_proxyconfiguration",
      children: "Rcp_ProxyConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_ProxyConfiguration Rcp_ProxyConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代理配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_proxytunnelmode",
      children: "Rcp_ProxyTunnelMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_ProxyTunnelMode Rcp_ProxyTunnelMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。'auto'表示为HTTPS创建隧道，而不是为HTTP创建隧道。“always”表示始终创建隧道。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_proxytype",
      children: "Rcp_ProxyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_ProxyType Rcp_ProxyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代理类型。用于区分不同的代理配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_remotevalidationtype",
      children: "Rcp_RemoteValidationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_RemoteValidationType Rcp_RemoteValidationType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "远程验证类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于区分验证远程服务器身份的CA，在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration",
        children: "Rcp_SecurityConfiguration"
      }), "中描述。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_request",
      children: "Rcp_Request"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Request Rcp_Request\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_requestcontent",
      children: "Rcp_RequestContent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_RequestContent Rcp_RequestContent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求的内容。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_requestcookieentry",
      children: "Rcp_RequestCookieEntry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_RequestCookieEntry Rcp_RequestCookieEntry\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述请求的所有Cookie键值对。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_requestcookies",
      children: "Rcp_RequestCookies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_RequestCookies Rcp_RequestCookies\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求Cookie。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "允许你在一个对象中指定你需要的所有Cookies，例如：{'name1'：'value1'，'name2'：'value2'}。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_requesthandler",
      children: "Rcp_RequestHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_RequestHandler Rcp_RequestHandler\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
        children: "Rcp_Interceptor"
      }), "关联的异步处理器。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_response",
      children: "Rcp_Response"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Response Rcp_Response\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "网络请求的响应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_responsecallback",
      children: "Rcp_ResponseCallback"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef void(* Rcp_ResponseCallback) (void *usrCtx, Rcp_Response *response, uint32_t errCode)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应回调函数指针。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "usrCtx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用户上下文。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "response"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["请求所生成的响应。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
              children: "Rcp_Response"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[out] 表示常见的错误代码。  0：成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900001-%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E5%8D%8F%E8%AE%AE",
              children: "1007900001"
            }), "：不支持的协议。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900003-url%E6%A0%BC%E5%BC%8F%E9%94%99%E8%AF%AF",
              children: "1007900003"
            }), "：URL使用了错误/非法的格式或缺少URL。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900005-%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5",
              children: "1007900005"
            }), "：无法解析代理名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900006-%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5",
              children: "1007900006"
            }), "：无法解析主机名。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900007-%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8",
              children: "1007900007"
            }), "：无法连接到服务器。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900008-%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%94%E5%9B%9E%E9%9D%9E%E6%B3%95%E6%95%B0%E6%8D%AE",
              children: "1007900008"
            }), "：异常的服务器回复。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900009-%E6%8B%92%E7%BB%9D%E5%AF%B9%E8%BF%9C%E7%A8%8B%E8%B5%84%E6%BA%90%E7%9A%84%E8%AE%BF%E9%97%AE",
              children: "1007900009"
            }), "：对远程资源的访问被拒绝。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900016-http2%E5%B8%A7%E5%B1%82%E9%94%99%E8%AF%AF",
              children: "1007900016"
            }), "：HTTP2框架层中的错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900018-%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%AE%8C%E6%95%B4",
              children: "1007900018"
            }), "：已传输部分文件。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900025-%E4%B8%8A%E4%BC%A0%E5%A4%B1%E8%B4%A5",
              children: "1007900025"
            }), "：上载失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900026-%E4%BB%8E%E6%96%87%E4%BB%B6%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E4%B8%AD%E6%89%93%E5%BC%80%E8%AF%BB%E5%8F%96%E6%9C%AC%E5%9C%B0%E6%95%B0%E6%8D%AE%E5%A4%B1%E8%B4%A5",
              children: "1007900026"
            }), "：无法从文件/应用程序中打开/读取本地数据。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900027-%E5%86%85%E5%AD%98%E4%B8%8D%E8%B6%B3",
              children: "1007900027"
            }), "：内存不足。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900028-%E6%93%8D%E4%BD%9C%E8%B6%85%E6%97%B6",
              children: "1007900028"
            }), "：已达到超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900047-%E9%87%8D%E5%AE%9A%E5%90%91%E6%AC%A1%E6%95%B0%E8%BE%BE%E5%88%B0%E6%9C%80%E5%A4%A7%E5%80%BC",
              children: "1007900047"
            }), "：重定向数达到最大数量。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900052-%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B2%A1%E6%9C%89%E8%BF%94%E5%9B%9E%E5%86%85%E5%AE%B9",
              children: "1007900052"
            }), "：服务器没有返回任何内容（没有标头，没有数据）。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900055-%E5%8F%91%E9%80%81%E7%BD%91%E7%BB%9C%E6%95%B0%E6%8D%AE%E5%A4%B1%E8%B4%A5",
              children: "1007900055"
            }), "：向对等方发送数据失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900056-%E6%8E%A5%E6%94%B6%E7%BD%91%E7%BB%9C%E6%95%B0%E6%8D%AE%E5%A4%B1%E8%B4%A5",
              children: "1007900056"
            }), "：从对等方接收数据时失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900058-%E6%9C%AC%E5%9C%B0ssl%E8%AF%81%E4%B9%A6%E9%94%99%E8%AF%AF",
              children: "1007900058"
            }), "：本地SSL证书有问题。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900059-%E6%97%A0%E6%B3%95%E4%BD%BF%E7%94%A8%E6%8C%87%E5%AE%9A%E7%9A%84%E5%AF%86%E7%A0%81",
              children: "1007900059"
            }), "：无法使用指定的SSL密钥。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900060-%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8ssl%E8%AF%81%E4%B9%A6%E6%88%96ssh%E7%A7%98%E9%92%A5%E4%B8%8D%E6%AD%A3%E7%A1%AE",
              children: "1007900060"
            }), "：SSL对等证书或SSH远程密钥不正常。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900061-%E6%97%A0%E6%B3%95%E8%AF%86%E5%88%AB%E6%88%96%E9%94%99%E8%AF%AF%E7%9A%84http%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F",
              children: "1007900061"
            }), "：无法识别或错误的HTTP内容或传输编码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900063-%E8%B6%85%E5%87%BA%E6%9C%80%E5%A4%A7%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F",
              children: "1007900063"
            }), "：超过了最大文件大小。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900070-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A3%81%E7%9B%98%E7%A9%BA%E9%97%B4%E4%B8%8D%E8%B6%B3",
              children: "1007900070"
            }), "：磁盘已满或分配超出。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900073-%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%94%E5%9B%9E%E6%96%87%E4%BB%B6%E5%B7%B2%E5%AD%98%E5%9C%A8",
              children: "1007900073"
            }), "：远程文件已存在。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900077-ssl-ca%E8%AF%81%E4%B9%A6%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%88%96%E6%B2%A1%E6%9C%89%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90",
              children: "1007900077"
            }), "：SSL CA证书有问题 (路径？ 访问权限？)。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900078-url%E8%AF%B7%E6%B1%82%E7%9A%84%E6%96%87%E4%BB%B6%E4%B8%8D%E5%AD%98%E5%9C%A8",
              children: "1007900078"
            }), "：找不到远程文件。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900992-%E8%AF%B7%E6%B1%82%E5%B7%B2%E8%A2%AB%E5%8F%96%E6%B6%88",
              children: "1007900992"
            }), "：请求已取消。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900993-%E4%BC%9A%E8%AF%9D%E5%B7%B2%E5%85%B3%E9%97%AD",
              children: "1007900993"
            }), "：会话已关闭或无效。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900094-%E8%BA%AB%E4%BB%BD%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "1007900094"
            }), "：身份验证函数返回了错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900201-%E7%A6%81%E6%AD%A2%E6%98%8E%E6%96%87%E4%BC%A0%E8%BE%93",
              children: "1007900201"
            }), "：禁止明文传输。从6.1.0(23)起新增支持此错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900995-%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E4%BB%A3%E7%90%86%E5%A4%B1%E8%B4%A5",
              children: "1007900995"
            }), "：获取系统代理失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900996-%E4%BB%A3%E7%90%86%E7%B1%BB%E5%9E%8B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1007900996"
            }), "：代理类型不受支持。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900997-%E6%97%A0%E6%95%88%E7%9A%84%E5%86%85%E5%AE%B9%E7%B1%BB%E5%9E%8B",
              children: "1007900997"
            }), "：无效的内容类型。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900998--%E6%89%80%E8%AF%B7%E6%B1%82%E7%9A%84%E6%96%B9%E6%B3%95%E4%B8%8D%E8%A2%AB%E6%94%AF%E6%8C%81",
              children: "1007900998"
            }), "：方法不受支持。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1007900999"
            }), "：内部错误。  Others：1007900000 + CURL_ERROR_CODE。 更多常见的错误码，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://curl.se/libcurl/c/libcurl-errors.html",
              children: "curl错误码"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_responsecallbackobject",
      children: "Rcp_ResponseCallbackObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_ResponseCallbackObject Rcp_ResponseCallbackObject\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应回调结构体。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_responsecookies",
      children: "Rcp_ResponseCookies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_ResponseCookies Rcp_ResponseCookies\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应Cookie。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_securityconfiguration",
      children: "Rcp_SecurityConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_SecurityConfiguration Rcp_SecurityConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求的安全配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_serverauthentication",
      children: "Rcp_ServerAuthentication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_ServerAuthentication Rcp_ServerAuthentication\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "服务器身份验证。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_session",
      children: "Rcp_Session"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Session Rcp_Session\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_sessionconfiguration",
      children: "Rcp_SessionConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_SessionConfiguration Rcp_SessionConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_sessionlistener",
      children: "Rcp_SessionListener"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_SessionListener Rcp_SessionListener\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭或取消会话事件的回调函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_sessiontype",
      children: "Rcp_SessionType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_SessionType Rcp_SessionType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_staticdnsrule",
      children: "Rcp_StaticDnsRule"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_StaticDnsRule Rcp_StaticDnsRule\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "静态DNS规则。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_staticdnsruleitem",
      children: "Rcp_StaticDnsRuleItem"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_StaticDnsRuleItem Rcp_StaticDnsRuleItem\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述单个静态DNS规则。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_statuscode",
      children: "Rcp_StatusCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef enum Rcp_StatusCode Rcp_StatusCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求响应的状态码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_syncinterceptor",
      children: "Rcp_SyncInterceptor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_SyncInterceptor Rcp_SyncInterceptor\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步拦截器。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_syncinterceptorarray",
      children: "Rcp_SyncInterceptorArray"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_SyncInterceptorArray Rcp_SyncInterceptorArray\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同步拦截器数组。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_syncrequesthandler",
      children: "Rcp_SyncRequestHandler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_SyncRequestHandler Rcp_SyncRequestHandler\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
        children: "Rcp_SyncInterceptor"
      }), "关联的同步处理器。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_timeinfo",
      children: "Rcp_TimeInfo"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_TimeInfo Rcp_TimeInfo\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "响应计时信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["它将在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response#timeinfo",
        children: "Rcp_Response.timeInfo"
      }), "中被收集，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___tracing_configuration/x_rcp___tracing_configuration#collecttimeinfo",
        children: "Rcp_TracingConfiguration.collectTimeInfo"
      }), "决定是否收集它。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_timeout",
      children: "Rcp_Timeout"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Timeout Rcp_Timeout\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求的超时配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_tracingconfiguration",
      children: "Rcp_TracingConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_TracingConfiguration Rcp_TracingConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求追踪配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_transferconfiguration",
      children: "Rcp_TransferConfiguration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_TransferConfiguration Rcp_TransferConfiguration\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "传输配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_transferrange",
      children: "Rcp_TransferRange"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_TransferRange Rcp_TransferRange\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP传输范围。该设置将转换为HTTP Range标头。具有范围标头的HTTP请求要求服务器仅发送回HTTP响应的一部分。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_urls",
      children: "Rcp_Urls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_Urls Rcp_Urls\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URLs，用于确定主机是否正在使用代理。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_webproxy",
      children: "Rcp_WebProxy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "typedef struct Rcp_WebProxy Rcp_WebProxy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义代理配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "枚举类型说明",
      children: "枚举类型说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_authenticationtype-1",
      children: "Rcp_AuthenticationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_AuthenticationType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "枚举类型。服务器的身份验证类型。如果未设置，请与服务器协商。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_AUTHENTICATION_AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_AUTHENTICATION_BASIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基本类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_AUTHENTICATION_NTLM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NTLM类型"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_AUTHENTICATION_DIGEST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DIGEST类型"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_certtype-1",
      children: "Rcp_CertType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_CertType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端证书类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CERT_PEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEM证书类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CERT_DER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DER证书类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CERT_P12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P12证书类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_contentorpathorcallbacktype-1",
      children: "Rcp_ContentOrPathOrCallbackType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_ContentOrPathOrCallbackType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["回调的内容、路径或类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___content_or_path_or_callback/x_rcp___content_or_path_or_callback",
        children: "Rcp_ContentOrPathOrCallback"
      }), "中使用的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_FILE_VALUE_TYPE_CONTENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示内容类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_FILE_VALUE_TYPE_PATH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示路径类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_FILE_VALUE_TYPE_CALLBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示回调类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_contenttype-1",
      children: "Rcp_ContentType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_ContentType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["内容类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_content/x_rcp___request_content",
        children: "Rcp_RequestContent"
      }), "中使用的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CONTENT_TYPE_STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CONTENT_TYPE_FORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CONTENT_TYPE_MULTIPARTFORM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多部分表格。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CONTENT_TYPE_GETCALLBACK"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_debugevent-1",
      children: "Rcp_DebugEvent"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_DebugEvent\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "描述调试信息的事件类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DEBUG_EVENT_TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文本事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DEBUG_EVENT_HEADER_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入标头事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DEBUG_EVENT_HEADER_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传出标头事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DEBUG_EVENT_DATA_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "接收数据事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DEBUG_EVENT_DATA_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "外发数据事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DEBUG_EVENT_SSL_DATA_IN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传入SSL/TLS事件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DEBUG_EVENT_SSL_DATA_OUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "传出SSL/TLS事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_dnsruletype-1",
      children: "Rcp_DnsRuleType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_DnsRuleType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DNS规则类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___dns_rule/x_rcp___dns_rule",
        children: "Rcp_DnsRule"
      }), "中使用的DNS规则类型。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DNS_RULE_DNS_SERVERS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DNS服务器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DNS_RULE_STATIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "静态DNS规则。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_DNS_RULE_DYNAMIC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态DNS规则。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_exclusionsvaluetype-1",
      children: "Rcp_ExclusionsValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_ExclusionsValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["代理排除中使用的数据类型. 用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
        children: "Rcp_Exclusions"
      }), "中使用的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_EXCLUSION_USE_URL_ARRAY"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            }), "中使用urls。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_EXCLUSION_USE_CALLBACK"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["在", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___exclusions/x_rcp___exclusions",
              children: "Rcp_Exclusions"
            }), "中使用回调函数", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_exclusionfunction",
              children: "Rcp_ExclusionFunction"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_formvaluetype-1",
      children: "Rcp_FormValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_FormValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表单值类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_FORM_VALUE_TYPE_INT32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示INT32数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_FORM_VALUE_TYPE_INT64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示INT64数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_FORM_VALUE_TYPE_BOOL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示bool数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_FORM_VALUE_TYPE_STRING"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示string数据类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_FORM_VALUE_TYPE_DOUBLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示double数据类型。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_multipartvaluetype-1",
      children: "Rcp_MultipartValueType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_MultipartValueType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["多部分值类型。用于区分", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
        children: "Rcp_MultipartFormFieldValue"
      }), "中使用的数据。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_TYPE_FORM_FIELD_VALUE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_value/x_rcp___form_field_value",
              children: "Rcp_FormFieldValue"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_TYPE_FORM_FIELD_FILE_VALUE"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["表示使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___form_field_file_value/x_rcp___form_field_file_value",
              children: "Rcp_FormFieldFileValue"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_pathpreference-1",
      children: "Rcp_PathPreference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_PathPreference\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求路径首选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这只是调用者的建议，系统决定使用哪个路径。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PATH_PREFERENCE_AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PATH_PREFERENCE_WIFI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倾向WIFI网络。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PATH_PREFERENCE_CELLULAR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "倾向蜂窝网路。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_proxytunnelmode-1",
      children: "Rcp_ProxyTunnelMode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_ProxyTunnelMode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于控制何时创建代理隧道。 隧道或隧道传输意味着向代理发送HTTP CONNECT请求，要求它连接到特定端口号上的远程主机，然后流量只是通过代理。“auto”表示为HTTPS创建隧道，而不是为HTTP创建隧道。“always”表示始终创建隧道。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PROXY_TUNNEL_AUTO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自动。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PROXY_TUNNEL_ALWAYS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "总是创建。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_proxytype-1",
      children: "Rcp_ProxyType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_ProxyType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代理类型。用于区分不同的代理配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PROXY_SYSTEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PROXY_CUSTOM"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["使用自定义代理，选择后将解析", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___proxy_configuration/x_rcp___proxy_configuration#customproxy",
              children: "Rcp_ProxyConfiguration.customProxy"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PROXY_NO_PROXY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不使用代理。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_remotevalidationtype-1",
      children: "Rcp_RemoteValidationType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_RemoteValidationType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "远程验证类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["用于区分验证远程服务器身份的CA在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___security_configuration/x_rcp___security_configuration",
        children: "Rcp_SecurityConfiguration"
      }), "中描述。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_REMOTE_VALIDATION_SYSTEM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统验证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_REMOTE_VALIDATION_SKIP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "跳过验证。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_REMOTE_VALIDATION_CERTIFICATE_AUTHORITY"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CA验证。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_sessiontype-1",
      children: "Rcp_SessionType"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_SessionType\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "会话类型。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_SESSION_TYPE_HTTP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用HTTP会话。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_SESSION_TYPE_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rcp_SessionType的最大值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rcp_statuscode-1",
      children: "Rcp_StatusCode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "enum Rcp_StatusCode\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请求响应的状态码。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "枚举值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_NONE = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "默认值。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_OK = 200"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CREATED = 201"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求成功并创建了新资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_ACCEPTED = 202"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求已接受，但尚未处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_NOT_AUTHORITATIVE = 203"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回信息不是原始的。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_NO_CONTENT = 204"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求成功，但无返回内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_RESET= 205"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求已成功处理，但需要重置内容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PARTIAL = 206"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "部分内容请求成功。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_MULTI_CHOICE = 300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对于该请求，服务器支持多种操作方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_MOVED_PERMANENTLY = 301"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "永久重定向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_MOVED_TEMPORARILY = 302"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "临时重定向。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_SEE_OTHER = 303"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查看其他位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_NOT_MODIFIED = 304"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源未修改。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_USE_PROXY = 305"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "使用代理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_BAD_REQUEST = 400"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求语法错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_UNAUTHORIZED = 401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PAYMENT_REQUIRED = 402"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要付费。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_FORBIDDEN = 403"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "禁止访问。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_NOT_FOUND = 404"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源未找到。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_BAD_METHOD = 405"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "方法不允许。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_NOT_ACCEPTABLE = 406"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不接受。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PROXY_AUTH = 407"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要代理授权。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CLIENT_TIMEOUT = 408"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_CONFLICT = 409"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "冲突。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_GONE = 410"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源已永久删除。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_LENGTH_REQUIRED = 411"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要有效长度。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_PRECON_FAILED = 412"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未满足前提条件。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_ENTITY_TOO_LARGE = 413"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求实体过大。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_REQ_TOO_LONG = 414"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求的 URI 过长。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_UNSUPPORTED_TYPE = 415"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的媒体类型。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_INTERNAL_ERROR = 500"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务器内部错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_NOT_IMPLEMENTED = 501"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "尚未实现。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_BAD_GATEWAY = 502"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网关错误。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_UNAVAILABLE = 503"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "服务不可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_GATEWAY_TIMEOUT = 504"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "网关超时。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RCP_VERSION = 505"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不支持的HTTP版本。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数说明",
      children: "函数说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_callnextrequesthandler",
      children: "HMS_Rcp_CallNextRequestHandler()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_CallNextRequestHandler (Rcp_Request * request, const Rcp_RequestHandler * next, const Rcp_ResponseCallbackObject * responseCallback )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在拦截器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___interceptor/x_rcp___interceptor",
        children: "Rcp_Interceptor"
      }), "的函数中可以调用下一个拦截器或defaultHandler。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "next"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向下一个异步处理器的指针", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requesthandler",
              children: "Rcp_RequestHandler"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "responseCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["响应回调。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["uint32_t。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), " - 参数错误 或 表示下一个异步处理器的返回值。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_callnextsyncrequesthandler",
      children: "HMS_Rcp_CallNextSyncRequestHandler()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Response* HMS_Rcp_CallNextSyncRequestHandler (Rcp_Request * request, const Rcp_SyncRequestHandler * next, uint32_t * errCode )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在拦截器", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___sync_interceptor/x_rcp___sync_interceptor",
        children: "Rcp_SyncInterceptor"
      }), "的函数中可以调用下一个拦截器或默认处理器。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "next"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向下一个同步处理器的指针", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_syncrequesthandler",
              children: "Rcp_SyncRequestHandler"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["输出项。", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            }), "：参数错误 或 表示下一个同步处理器的返回值。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rcp_Response* 返回响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_cancelrequest",
      children: "HMS_Rcp_CancelRequest()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_CancelRequest (Rcp_Session * session, const Rcp_Request * request )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消一个请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.RemoteCommunication"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "session"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要取消请求的会话。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要取消的请求。指向要关闭的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), "的指针。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消成功时返回0，权限不足时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section201-%E6%9D%83%E9%99%90%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
        children: "201"
      }), "，输入参数为空指针时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "，会话已关闭或无效时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900993-%E4%BC%9A%E8%AF%9D%E5%B7%B2%E5%85%B3%E9%97%AD",
        children: "1007900993"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_cancelsession",
      children: "HMS_Rcp_CancelSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_CancelSession (Rcp_Session * session)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "取消会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.RemoteCommunication"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "session"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要取消的会话。指向要关闭的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["取消成功时返回0，权限不足时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section201-%E6%9D%83%E9%99%90%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
        children: "201"
      }), "，输入参数为空指针时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "，会话已关闭或无效时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900993-%E4%BC%9A%E8%AF%9D%E5%B7%B2%E5%85%B3%E9%97%AD",
        children: "1007900993"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_closesession",
      children: "HMS_Rcp_CloseSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_CloseSession (Rcp_Session ** session)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "关闭会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.RemoteCommunication"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "session"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要关闭的会话。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), "指针的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["关闭成功时返回0，权限不足时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section201-%E6%9D%83%E9%99%90%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
        children: "201"
      }), "，输入参数为空指针时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "，会话已关闭或无效时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900993-%E4%BC%9A%E8%AF%9D%E5%B7%B2%E5%85%B3%E9%97%AD",
        children: "1007900993"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_createform",
      children: "HMS_Rcp_CreateForm()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Form* HMS_Rcp_CreateForm (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个简单表单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_Form* 指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_form",
        children: "Rcp_Form"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_createheaders",
      children: "HMS_Rcp_CreateHeaders()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Headers* HMS_Rcp_CreateHeaders (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "为请求或响应创建标头。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_Headers* 创建的标头。指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_headers",
        children: "Rcp_Headers"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_createmultipartform",
      children: "HMS_Rcp_CreateMultipartForm()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_MultipartForm* HMS_Rcp_CreateMultipartForm (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建一个多部分表单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_MultipartForm* 返回创建的多部分表单，指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_multipartform",
        children: "Rcp_MultipartForm"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_createrequest",
      children: "HMS_Rcp_CreateRequest()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Request* HMS_Rcp_CreateRequest (const char * url)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "url"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "请求URL。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_Request* 返回创建的请求。指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
        children: "Rcp_Request"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_createrequestcookies",
      children: "HMS_Rcp_CreateRequestCookies()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_RequestCookies* HMS_Rcp_CreateRequestCookies (void)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建空的请求Cookie。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_RequestCookies* 返回指向已创建的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_requestcookies",
        children: "Rcp_RequestCookies"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_createsession",
      children: "HMS_Rcp_CreateSession()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Session* HMS_Rcp_CreateSession (const Rcp_SessionConfiguration * configuration, uint32_t * errCode )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "创建会话。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.RemoteCommunication"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话配置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0：成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            }), "：参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section201-%E6%9D%83%E9%99%90%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "201"
            }), "：权限不足。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900027-%E5%86%85%E5%AD%98%E4%B8%8D%E8%B6%B3",
              children: "1007900027"
            }), "：内存不足。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_Session* 返回创建的会话。指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_session",
        children: "Rcp_Session"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_destroyform",
      children: "HMS_Rcp_DestroyForm()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_Rcp_DestroyForm (Rcp_Form * form)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁一个简单表单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "form"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要销毁的表格。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_destroyheaderentries",
      children: "HMS_Rcp_DestroyHeaderEntries()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_Rcp_DestroyHeaderEntries (Rcp_HeaderEntry * headerEntry)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_rcp_getheaderentries",
        children: "HMS_Rcp_GetHeaderEntries"
      }), "中获取的所有键值对。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "headerEntry"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
              children: "Rcp_HeaderEntry"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_destroyheaders",
      children: "HMS_Rcp_DestroyHeaders()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_Rcp_DestroyHeaders (Rcp_Headers * headers)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁请求或响应的标头。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "headers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_destroymultipartform",
      children: "HMS_Rcp_DestroyMultipartForm()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_Rcp_DestroyMultipartForm (Rcp_MultipartForm * multipartForm)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁一个多部分表单。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multipartForm"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["要销毁的多部分表单。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_destroyrequest",
      children: "HMS_Rcp_DestroyRequest()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_Rcp_DestroyRequest (Rcp_Request * request)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁请求。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_destroyrequestcookieentries",
      children: "HMS_Rcp_DestroyRequestCookieEntries()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_Rcp_DestroyRequestCookieEntries (Rcp_RequestCookieEntry * cookieEntry)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["销毁从", (0,jsx_runtime.jsx)(_components.a, {
        href: "#hms_rcp_getrequestcookievalue",
        children: "HMS_Rcp_GetRequestCookieValue"
      }), "获取的所有与请求Cookie相关的键值对。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cookieEntry"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
              children: "Rcp_RequestCookieEntry"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_destroyrequestcookies",
      children: "HMS_Rcp_DestroyRequestCookies()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_Rcp_DestroyRequestCookies (Rcp_RequestCookies * cookies)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁请求Cookie。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cookies"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_destroyresponsecookieattrentries",
      children: "HMS_Rcp_DestroyResponseCookieAttrEntries()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "void HMS_Rcp_DestroyResponseCookieAttrEntries (Rcp_CookieAttributeEntry * entries)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "销毁响应Cookie属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "entries"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要销毁的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
              children: "Rcp_CookieAttributeEntry"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_fetch",
      children: "HMS_Rcp_Fetch()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_Fetch (Rcp_Session * session, Rcp_Request * request, const Rcp_ResponseCallbackObject * responseCallback )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送异步请求并获取响应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.RemoteCommunication"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "session"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发起请求使用的会话。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发送的请求。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "responseCallback"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向用户定义的响应回调函数的指针。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response_callback_object/x_rcp___response_callback_object",
              children: "Rcp_ResponseCallbackObject"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["执行成功时返回0，权限不足时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section201-%E6%9D%83%E9%99%90%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
        children: "201"
      }), "，输入参数为空指针时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "，会话已关闭或无效时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900993-%E4%BC%9A%E8%AF%9D%E5%B7%B2%E5%85%B3%E9%97%AD",
        children: "1007900993"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ohos.permission.INTERNET（如需使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_pathpreference-1",
        children: "PathPreference"
      }), "的RCP_PATH_PREFERENCE_CELLULAR模式，则额外需要ohos.permission.GET_NETWORK_INFO）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_fetchsync",
      children: "HMS_Rcp_FetchSync()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_Response* HMS_Rcp_FetchSync (Rcp_Session * session, Rcp_Request * request, uint32_t * errCode )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "发送同步请求并获取响应。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.RemoteCommunication"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "session"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发起请求使用的会话。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["发送的请求。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request/x_rcp___request",
              children: "Rcp_Request"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "errCode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[out] 输出常见的错误代码。  0：成功。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section201-%E6%9D%83%E9%99%90%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "201"
            }), "：权限不足。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
              children: "401"
            }), "：参数错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900001-%E4%B8%8D%E6%94%AF%E6%8C%81%E7%9A%84%E5%8D%8F%E8%AE%AE",
              children: "1007900001"
            }), "：不支持的协议。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900003-url%E6%A0%BC%E5%BC%8F%E9%94%99%E8%AF%AF",
              children: "1007900003"
            }), "：URL使用了错误/非法的格式或缺少URL。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900005-%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5",
              children: "1007900005"
            }), "：无法解析代理名称。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900006-%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E5%A4%B1%E8%B4%A5",
              children: "1007900006"
            }), "：无法解析主机名。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900007-%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8",
              children: "1007900007"
            }), "：无法连接到服务器。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900008-%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%94%E5%9B%9E%E9%9D%9E%E6%B3%95%E6%95%B0%E6%8D%AE",
              children: "1007900008"
            }), "：异常的服务器回复。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900009-%E6%8B%92%E7%BB%9D%E5%AF%B9%E8%BF%9C%E7%A8%8B%E8%B5%84%E6%BA%90%E7%9A%84%E8%AE%BF%E9%97%AE",
              children: "1007900009"
            }), "：对远程资源的访问被拒绝。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900016-http2%E5%B8%A7%E5%B1%82%E9%94%99%E8%AF%AF",
              children: "1007900016"
            }), "：HTTP2框架层中的错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900018-%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%E4%B8%8D%E5%AE%8C%E6%95%B4",
              children: "1007900018"
            }), "：已传输部分文件。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900025-%E4%B8%8A%E4%BC%A0%E5%A4%B1%E8%B4%A5",
              children: "1007900025"
            }), "：上载失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900026-%E4%BB%8E%E6%96%87%E4%BB%B6%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E4%B8%AD%E6%89%93%E5%BC%80%E8%AF%BB%E5%8F%96%E6%9C%AC%E5%9C%B0%E6%95%B0%E6%8D%AE%E5%A4%B1%E8%B4%A5",
              children: "1007900026"
            }), "：无法从文件/应用程序中打开/读取本地数据。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900027-%E5%86%85%E5%AD%98%E4%B8%8D%E8%B6%B3",
              children: "1007900027"
            }), "：内存不足。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900028-%E6%93%8D%E4%BD%9C%E8%B6%85%E6%97%B6",
              children: "1007900028"
            }), "：已达到超时。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900047-%E9%87%8D%E5%AE%9A%E5%90%91%E6%AC%A1%E6%95%B0%E8%BE%BE%E5%88%B0%E6%9C%80%E5%A4%A7%E5%80%BC",
              children: "1007900047"
            }), "：重定向数达到最大数量。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900052-%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%B2%A1%E6%9C%89%E8%BF%94%E5%9B%9E%E5%86%85%E5%AE%B9",
              children: "1007900052"
            }), "：服务器没有返回任何内容（没有标头，没有数据）。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900055-%E5%8F%91%E9%80%81%E7%BD%91%E7%BB%9C%E6%95%B0%E6%8D%AE%E5%A4%B1%E8%B4%A5",
              children: "1007900055"
            }), "：向对等方发送数据失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900056-%E6%8E%A5%E6%94%B6%E7%BD%91%E7%BB%9C%E6%95%B0%E6%8D%AE%E5%A4%B1%E8%B4%A5",
              children: "1007900056"
            }), "：从对等方接收数据时失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900058-%E6%9C%AC%E5%9C%B0ssl%E8%AF%81%E4%B9%A6%E9%94%99%E8%AF%AF",
              children: "1007900058"
            }), "：本地SSL证书有问题。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900059-%E6%97%A0%E6%B3%95%E4%BD%BF%E7%94%A8%E6%8C%87%E5%AE%9A%E7%9A%84%E5%AF%86%E7%A0%81",
              children: "1007900059"
            }), "：无法使用指定的SSL密钥。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900060-%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8ssl%E8%AF%81%E4%B9%A6%E6%88%96ssh%E7%A7%98%E9%92%A5%E4%B8%8D%E6%AD%A3%E7%A1%AE",
              children: "1007900060"
            }), "：SSL对等证书或SSH远程密钥不正常。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900061-%E6%97%A0%E6%B3%95%E8%AF%86%E5%88%AB%E6%88%96%E9%94%99%E8%AF%AF%E7%9A%84http%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F",
              children: "1007900061"
            }), "：无法识别或错误的HTTP内容或传输编码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900063-%E8%B6%85%E5%87%BA%E6%9C%80%E5%A4%A7%E6%96%87%E4%BB%B6%E5%A4%A7%E5%B0%8F",
              children: "1007900063"
            }), "：超过了最大文件大小。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900070-%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%A3%81%E7%9B%98%E7%A9%BA%E9%97%B4%E4%B8%8D%E8%B6%B3",
              children: "1007900070"
            }), "：磁盘已满或分配超出。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900073-%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%94%E5%9B%9E%E6%96%87%E4%BB%B6%E5%B7%B2%E5%AD%98%E5%9C%A8",
              children: "1007900073"
            }), "：远程文件已存在。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900077-ssl-ca%E8%AF%81%E4%B9%A6%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%88%96%E6%B2%A1%E6%9C%89%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90",
              children: "1007900077"
            }), "：SSL CA证书有问题 (路径？ 访问权限?)。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900078-url%E8%AF%B7%E6%B1%82%E7%9A%84%E6%96%87%E4%BB%B6%E4%B8%8D%E5%AD%98%E5%9C%A8",
              children: "1007900078"
            }), "：找不到远程文件。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900992-%E8%AF%B7%E6%B1%82%E5%B7%B2%E8%A2%AB%E5%8F%96%E6%B6%88",
              children: "1007900992"
            }), "：请求已取消。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900993-%E4%BC%9A%E8%AF%9D%E5%B7%B2%E5%85%B3%E9%97%AD",
              children: "1007900993"
            }), "：会话已关闭或无效。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900094-%E8%BA%AB%E4%BB%BD%E6%A0%A1%E9%AA%8C%E5%A4%B1%E8%B4%A5",
              children: "1007900094"
            }), "：身份验证函数返回了错误。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900201-%E7%A6%81%E6%AD%A2%E6%98%8E%E6%96%87%E4%BC%A0%E8%BE%93",
              children: "1007900201"
            }), "：禁止明文传输。从6.1.0(23)起新增支持此错误码。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900995-%E8%8E%B7%E5%8F%96%E7%B3%BB%E7%BB%9F%E4%BB%A3%E7%90%86%E5%A4%B1%E8%B4%A5",
              children: "1007900995"
            }), "：获取系统代理失败。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900996-%E4%BB%A3%E7%90%86%E7%B1%BB%E5%9E%8B%E4%B8%8D%E6%94%AF%E6%8C%81",
              children: "1007900996"
            }), "：代理类型不受支持。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900997-%E6%97%A0%E6%95%88%E7%9A%84%E5%86%85%E5%AE%B9%E7%B1%BB%E5%9E%8B",
              children: "1007900997"
            }), "：无效的内容类型。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900998--%E6%89%80%E8%AF%B7%E6%B1%82%E7%9A%84%E6%96%B9%E6%B3%95%E4%B8%8D%E8%A2%AB%E6%94%AF%E6%8C%81",
              children: "1007900998"
            }), "：方法不受支持。  ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900999-%E5%86%85%E9%83%A8%E9%94%99%E8%AF%AF",
              children: "1007900999"
            }), "：内部错误。  Others：1007900000 + CURL_ERROR_CODE。更多常见的错误码，请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://curl.se/libcurl/c/libcurl-errors.html",
              children: "curl错误码"
            }), "。"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_Response* 返回的响应。指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___response/x_rcp___response",
        children: "Rcp_Response"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "权限："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ohos.permission.INTERNET（如需使用", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_pathpreference-1",
        children: "PathPreference"
      }), "的RCP_PATH_PREFERENCE_CELLULAR模式，则额外需要ohos.permission.GET_NETWORK_INFO）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getformvalue",
      children: "HMS_Rcp_GetFormValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_FormFieldValue* HMS_Rcp_GetFormValue (Rcp_Form * form, const char * key )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过键获取一个简单表单的对应值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "form"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rcp_FormFieldValue* 值。指向{@Rcp_FormFieldValue}的指针。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getheaderentries",
      children: "HMS_Rcp_GetHeaderEntries()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_HeaderEntry* HMS_Rcp_GetHeaderEntries (Rcp_Headers * headers)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取请求或响应头的所有键值对。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "headers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要获取所有键值对的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_HeaderEntry* 指向所有获取到的键值对", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_entry/x_rcp___header_entry",
        children: "Rcp_HeaderEntry"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getheadervalue",
      children: "HMS_Rcp_GetHeaderValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_HeaderValue* HMS_Rcp_GetHeaderValue (Rcp_Headers * headers, const char * name )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过键获取请求或响应头的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "headers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要获取值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_HeaderValue* 指向获得的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___header_value/x_rcp___header_value",
        children: "Rcp_HeaderValue"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getmultipartformvalue",
      children: "HMS_Rcp_GetMultipartFormValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_MultipartFormFieldValue* HMS_Rcp_GetMultipartFormValue (Rcp_MultipartForm * multipartForm, const char * key )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过键获取多部分表单的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multipartForm"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要获取值的多部分表单。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_MultipartFormFieldValue* 多部分表单的值。指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___multipart_form_field_value/x_rcp___multipart_form_field_value",
        children: "Rcp_MultipartFormFieldValue"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getrequestcookieentries",
      children: "HMS_Rcp_GetRequestCookieEntries()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_RequestCookieEntry* HMS_Rcp_GetRequestCookieEntries (Rcp_RequestCookies * cookies)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取请求Cookie中的所有键值对。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cookies"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要获取所有键值对的请求Cookie。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_RequestCookieEntry* 返回请求Cookie中的所有键值对。指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___request_cookie_entry/x_rcp___request_cookie_entry",
        children: "Rcp_RequestCookieEntry"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getrequestcookievalue",
      children: "HMS_Rcp_GetRequestCookieValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "char* HMS_Rcp_GetRequestCookieValue (Rcp_RequestCookies * cookies, const char * name )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过名称获取请求Cookie的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cookies"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要获取值的请求Cookie。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "char* 返回请求Cookie的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getresponsecookieattrentries",
      children: "HMS_Rcp_GetResponseCookieAttrEntries()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Rcp_CookieAttributeEntry* HMS_Rcp_GetResponseCookieAttrEntries (Rcp_CookieAttributes * cookieAttributes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_cookieattributes",
        children: "Rcp_CookieAttributes"
      }), "中获取所有响应Cookie属性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cookieAttributes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要获取所有Cookie属性的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___cookie_attribute_entry/x_rcp___cookie_attribute_entry",
        children: "Rcp_CookieAttributeEntry"
      }), " * 响应的Cookie属性列表。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getresponsecookieattrvalue",
      children: "HMS_Rcp_GetResponseCookieAttrValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* HMS_Rcp_GetResponseCookieAttrValue (Rcp_CookieAttributes * cookieAttributes, const char * name )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过名称获取Cookie属性的值。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cookieAttributes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要获取值的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_cookieattributes",
              children: "Rcp_CookieAttributes"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "char* Cookie属性中的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getsessionconfiguration",
      children: "HMS_Rcp_GetSessionConfiguration()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const Rcp_SessionConfiguration* HMS_Rcp_GetSessionConfiguration (Rcp_Session * session)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取会话配置。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.RemoteCommunication"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "session"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要获取会话配置的会话。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Rcp_SessionConfiguration* 返回的会话配置。指向", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___session_configuration/x_rcp___session_configuration",
        children: "Rcp_SessionConfiguration"
      }), "的指针。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_getsessionid",
      children: "HMS_Rcp_GetSessionId()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const char* HMS_Rcp_GetSessionId (Rcp_Session * session)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取会话ID。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.Collaboration.RemoteCommunication"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "session"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要获取会话ID的会话。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_session",
              children: "Rcp_Session"
            }), "的指针。"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "char* 返回的会话ID。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_setformvalue",
      children: "HMS_Rcp_SetFormValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_SetFormValue (Rcp_Form * form, const char * key, const Rcp_FormFieldValue * value )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置简单表单的键值对。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "form"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要设置键值对的表单。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_form",
              children: "Rcp_Form"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置成功返回0，入参有空指针或者size大小为0时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "，内存问题返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900027-%E5%86%85%E5%AD%98%E4%B8%8D%E8%B6%B3",
        children: "1007900027"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_setheadervalue",
      children: "HMS_Rcp_SetHeaderValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_SetHeaderValue (Rcp_Headers * headers, const char * name, const char * value )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置请求或响应头的键值对。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "headers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["指向要设置的", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_headers",
              children: "Rcp_Headers"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置成功返回0，入参有空指针或者size大小为0时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "，内存问题返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900027-%E5%86%85%E5%AD%98%E4%B8%8D%E8%B6%B3",
        children: "1007900027"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_setmultipartformvalue",
      children: "HMS_Rcp_SetMultipartFormValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_SetMultipartFormValue (Rcp_MultipartForm * multipartForm, const char * key, const Rcp_MultipartFormFieldValue * value )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置多部分表单的键值对。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multipartForm"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要设置的多部分表单。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_multipartform",
              children: "Rcp_MultipartForm"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置成功返回0，入参有空指针或者size大小为0时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "，内存问题返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900027-%E5%86%85%E5%AD%98%E4%B8%8D%E8%B6%B3",
        children: "1007900027"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_setrequestcookievalue",
      children: "HMS_Rcp_SetRequestCookieValue()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_SetRequestCookieValue (Rcp_RequestCookies * cookies, const char * name, const char * value )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置请求Cookie。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.0(12)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cookies"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要设置的请求Cookie。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_requestcookies",
              children: "Rcp_RequestCookies"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "键。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置成功返回0，入参有空指针或者size大小为0时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "，内存问题返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-error-code/remote-communication-error-code#section1007900027-%E5%86%85%E5%AD%98%E4%B8%8D%E8%B6%B3",
        children: "1007900027"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_setrequestonbinarydatarecvcallback",
      children: "HMS_Rcp_SetRequestOnBinaryDataRecvCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_SetRequestOnBinaryDataRecvCallback (Rcp_Request * request, Rcp_OnBinaryReceiveCallback onBinaryReceiveCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为请求设置流式接收二进制数据的回调函数。该回调函数与", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
        children: "Rcp_Configuration"
      }), "中配置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_ondatareceivecallback",
        children: "Rcp_OnDataReceiveCallback"
      }), "功能一致。设置后将替换在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/system-network-api/remote-communication-api/remote-communication-c/remote-communication-struct/x_rcp___configuration/x_rcp___configuration",
        children: "Rcp_Configuration"
      }), "中配置的", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_ondatareceivecallback",
        children: "Rcp_OnDataReceiveCallback"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.0.1(13)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要设置二进制数据回调的请求。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_request",
              children: "Rcp_Request"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onBinaryReceiveCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的二进制数据接收回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置成功返回0，参数错误时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hms_rcp_setrequestonstatuscodereceivecallback",
      children: "HMS_Rcp_SetRequestOnStatusCodeReceiveCallback()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "uint32_t HMS_Rcp_SetRequestOnStatusCodeReceiveCallback (Rcp_Request * request, Rcp_OnStatusCodeReceiveCallback onStatusCodeReceiveCallback);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["为请求设置响应状态码回调函数。在请求收到对端返回的响应码时触发。不可通过重新设置", (0,jsx_runtime.jsx)(_components.a, {
        href: "#rcp_onstatuscodereceivecallbackfunc",
        children: "Rcp_OnStatusCodeReceiveCallbackFunc"
      }), "为NULL实现取消监听。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 6.0.1(21)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数:"
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "request"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["需要设置响应状态码回调的请求。指向", (0,jsx_runtime.jsx)(_components.a, {
              href: "#rcp_request",
              children: "Rcp_Request"
            }), "的指针。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onStatusCodeReceiveCallback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要设置的响应状态码接收回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置成功返回0，参数错误时返回", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/errorcode-universal/errorcode-universal#section401-%E5%8F%82%E6%95%B0%E6%A3%80%E6%9F%A5%E5%A4%B1%E8%B4%A5",
        children: "401"
      }), "。"]
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